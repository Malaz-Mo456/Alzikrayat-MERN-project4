Alzikrayat - MERN Photo Sharing Application

1. Project Overview

Alzikrayat is a photo-sharing web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

The application allows users to create accounts, log in, upload photos, browse the photo gallery, view individual photo details, and interact with other users through comments.

This project was developed as part of a web development assignment.

2. Technologies Used

Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Vite

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

Libraries and Tools

- bcryptjs for password hashing.
- JSON Web Token (JWT) for token-based authentication.
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
- Uploading photos.
- Displaying photos in the gallery.
- Viewing individual photo details.
- Adding and displaying comments.
- Deleting photos with ownership verification.
- Responsive user interface.

4. Project Structure

The project is divided into two main folders:

- "client/": Contains the React frontend application.
- "server/": Contains the Express backend, API routes, controllers, database models, middleware, and database configuration.

5. Requirements

Before running the project, make sure you have installed:

- Node.js and npm.
- MongoDB.
- Git (optional, for cloning the repository).

6. Installation and Setup

Step 1: Clone the Repository

git clone https://github.com/Malaz-Mo456/Alzikrayat-MERN-project4
cd Alzikrayat-MERN

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

Do not upload the ".env" file to GitHub or share your private credentials.

Step 4: Start the Backend Server

From the "server/" folder, run:

npm run dev

The backend uses port 5000 by default.

Step 5: Install Frontend Dependencies

Open another terminal in the project folder and run:

cd client
npm install

Step 6: Start the Frontend

From the "client/" folder, run:

npm run dev

Open the local URL displayed in the terminal to access the application.

7. Database

The application uses MongoDB to store user accounts, photo information, and comments.

Make sure MongoDB is running and that the "MONGODB_URI" environment variable is correctly configured in the backend ".env" file.

8. Authentication and Security

The backend implements JWT-based authentication.

- A JWT token is generated when a user registers or logs in.
- Tokens are signed using a secret key stored in environment variables.
- Protected backend routes use authentication middleware to verify tokens.
- Invalid or expired tokens are rejected.
- Passwords are handled using bcryptjs password hashing.

9. Notes

- Both the frontend and backend must be running to use the application locally.
- Uploaded files are stored locally by the backend.
- Environment files and uploaded user files are excluded from Git.
- The ".env.example" file provides a template for the required environment variables.

