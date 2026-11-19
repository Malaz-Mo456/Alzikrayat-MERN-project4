Alzikrayat - MERN Photo Sharing Application

1. Project Overview

Alzikrayat is a photo-sharing web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

The application allows users to create accounts, log in, upload photos, browse the photo gallery, view individual photo details, and interact with other users through comments.

This project was developed as part of a web development assignment. It was later extended with JWT-based authentication as part of Project 4 (Bonus Project).

2. Technologies Used

Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Vite
- Axios for HTTP requests and automatic JWT header injection.

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

Libraries and Tools

- bcryptjs for password hashing.
- JSON Web Token (JWT) for token-based authentication.
- Axios for client-side API requests and interceptors.
- Joi for server-side input validation.
- Multer for handling photo uploads.
- dotenv for managing environment variables.
- Git and GitHub for version control.
- MongoDB Compass for database management.

3. Main Features

- User registration and login.
- Password hashing using bcryptjs.
- JWT-based authentication.
- Token verification for protected backend routes.
- Automatic JWT attachment to API requests using an Axios request interceptor.
- Storing the authentication token in localStorage.
- Logout functionality that clears the stored token.
- Uploading photos.
- Displaying photos in the gallery.
- Viewing individual photo details.
- Adding and displaying comments.
- Deleting photos with ownership verification.
- Responsive user interface.

4. Project 4 - Bonus Extension

Selected Track: Track A - JWT-Based Authentication

For Project 4, Track A (JWT-Based Authentication) was selected to improve the application's authentication process and protect its backend operations.

The main goal of this extension is to replace basic session-independent login handling with stateless token-based authentication.

JWT Implementation

- When a user registers or logs in, the backend verifies the user's information.
- Passwords are hashed using bcryptjs before being stored in the database.
- After successful registration or login, the server generates a JWT.
- The JWT is signed using a secret key stored in the server environment variables.
- The client stores the received token in localStorage.
- Axios is used to send API requests from the client.
- An Axios request interceptor automatically attaches the token to requests using the Authorization header in the format: "Bearer <token>".
- The backend authentication middleware verifies the token before allowing access to protected operations.
- Invalid or expired tokens are rejected.
- Logout clears the stored token from localStorage.

Protected Operations

Authentication middleware is applied to operations that require a logged-in user, including:

- Uploading photos.
- Deleting photos.
- Adding comments.

Photo deletion also checks ownership to ensure that users can delete only their own photos.

Reason for Selecting Track A

Track A was selected to improve application security and provide practical experience with stateless authentication, JWT, middleware, and protected API routes.

5. Project Structure

The project is divided into two main folders:

- "client/": Contains the React frontend application.
- "server/": Contains the Express backend, API routes, controllers, database models, middleware, and database configuration.

6. Requirements

Before running the project, make sure you have installed:

- Node.js and npm.
- MongoDB.
- Git (optional, for cloning the repository).

7. Installation and Setup

Step 1: Clone the Repository

git clone https://github.com/Malaz-Mo456/Alzikrayat-MERN-project4.git
cd Alzikrayat-MERN-project4

Step 2: Install Backend Dependencies

Open a terminal in the project folder and run:

cd server
npm install

Step 3: Configure Environment Variables

Inside the "server/" folder, create a file named ".env".

Use the following variables as a reference. You can also copy them from the ".env.example" file:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

Replace the example values with your own local configuration.

- "PORT": The port used by the backend server.
- "MONGODB_URI": The MongoDB connection string.
- "JWT_SECRET": The secret key used to sign and verify JWTs.
- "JWT_EXPIRES_IN": The token expiration time.

Do not upload the ".env" file to GitHub or share your private credentials.

Step 4: Start the Backend Server

From the "server/" folder, run:

npm run dev

The backend uses port 5000 by default.

Step 5: Install Frontend Dependencies

Open another terminal and navigate to the client folder:

cd client
npm install

Axios is included in the frontend dependencies and is used for API requests and JWT token injection.

Step 6: Start the Frontend

From the "client/" folder, run:

npm run dev

Open the local URL displayed in the terminal to access the application.

8. Database

The application uses MongoDB to store user accounts, photo information, and comments.

Make sure MongoDB is running and that the "MONGODB_URI" environment variable is correctly configured in the backend ".env" file.

9. Authentication and Security

The backend implements JWT-based authentication.

- A JWT token is generated when a user registers or logs in.
- Passwords are hashed using bcryptjs before being stored.
- Tokens are signed using a secret key stored in environment variables.
- The client stores the token in localStorage.
- Axios automatically attaches the token to API requests through a request interceptor.
- Protected backend routes use authentication middleware to verify tokens.
- Invalid or expired tokens are rejected.
- Protected write operations require a valid token.
- Logout removes the stored token from localStorage.

10. Notes

- Both the frontend and backend must be running to use the application locally.
- Uploaded files are stored locally by the backend.
- Environment files and uploaded user files are excluded from Git.
- The ".env.example" file provides a template for the required environment variables.
- The refresh token flow was not implemented because it is optional in the Project 4 Track A requirements.
