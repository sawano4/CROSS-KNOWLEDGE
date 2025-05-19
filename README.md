# Cross~Knowledge Platform

Cross~Knowledge is a web platform designed to provide personalized educational support and services. It includes a client-side React application and a server-side Express application to handle form submissions and email notifications.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

---

## Features

### Client-Side
- **React Application**: Built with React and Vite for fast development and performance.
- **Routing**: Uses `react-router-dom` for navigation between pages.
- **TailwindCSS**: Styled with TailwindCSS for modern and responsive design.
- **Flowbite Components**: Integrated Flowbite for pre-designed UI components.
- **EmailJS Integration**: Contact form sends emails directly using EmailJS.
- **Dynamic Pages**:
  - Home
  - About
  - Services
  - Inscription (Registration Form)

### Server-Side
- **Express Server**: Handles form submissions and file uploads.
- **Multer**: Used for handling file uploads.
- **Nodemailer**: Sends email notifications for form submissions.
- **CORS Enabled**: Allows cross-origin requests for API endpoints.

---

---

## Technologies Used

### Frontend
- React
- Vite
- TailwindCSS
- Flowbite
- EmailJS
- React Router

### Backend
- Express
- Multer
- Nodemailer
- CORS

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Clone the Repository

git clone [<repository-url>](https://github.com/sawano4/CROSS-KNOWLEDGE.git)
cd <repository-folder>

### Install dependencies 

# Client
cd client
npm install

# Server
cd server
npm install

### Run developement Servers
# Client

npm run dev

#Server

npm run dev

### Scripts
Client
npm run dev: Start the development server.
npm run build: Build the project for production.
npm run preview: Preview the production build.
npm run lint: Run ESLint to check for code quality.

Server
npm run dev: Start the Express server with nodemon.

### ENV Variables ( Used for Security measures )
Client
No environment variables are required for the client-side.

Server
Create a .env file in the server directory with the following variables:
OUTLOOK_USER=<your-outlook-email>
OUTLOOK_PASS=<your-outlook-password>
PORT=5000

### Deployment
Netlify
The client-side application is configured for deployment on Netlify. The netlify.toml file specifies the functions directory for serverless functions.

Render
The server-side application can be deployed on Render or any Node.js hosting platform.


