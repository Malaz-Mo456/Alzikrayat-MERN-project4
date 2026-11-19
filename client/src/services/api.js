import axios from 'axios';

// Create one Axios instance for API requests
const api = axios.create({
    baseURL: '/api'
});

// Add the JWT token to every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// Send API requests and return the response data
export const apiRequest = async (endpoint, options = {}) => {
    try {
        const config = {
            url: endpoint,
            method: options.method || 'GET',
            headers: options.headers || {}
        };

        if (options.body !== undefined) {
            if (options.body instanceof FormData) {
                config.data = options.body;
            } else if (typeof options.body === 'string') {
                config.data = JSON.parse(options.body);
            } else {
                config.data = options.body;
            }
        }

        const response = await api.request(config);

        return response.data;

    } catch (error) {
        const message =
            error.response?.data?.message ||
            error.message ||
            'Request failed';

        throw new Error(message);
    }
};

// Get the saved JWT token
export const getToken = () => {
    return localStorage.getItem('token');
};

export default apiRequest;

