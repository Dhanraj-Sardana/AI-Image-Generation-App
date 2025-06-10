# Genivis 
### MERN Application that uses multiple api to generate AI images with prompt and host images on the cloud you can download the generated image on your local system

##  Folder Structure

# backend

##  Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- Cloudinary (for image hosting)
- stability.ai (for image generation)
- dotenv (for environment management)

```
backend/
│
├── config/
│ └── db.js # MongoDB connection configuration
│
├── controllers/ # Business logic for API endpoints
│ ├── createPost.js
│ ├── home.js
│ └── image.js
│
├── models/ # Mongoose schema definitions
│ └── post.js
│
├── routes/ # Express routes
│ ├── imgRoute.js
│ └── route.js
│
├── node_modules/ # Node dependencies
│
├── .env # Environment variables (e.g., DB_URI, API keys)
├── .gitignore # Git ignore rules
├── app.js # Entry point for Express server
├── package.json # Project metadata and dependencies
└── package-lock.json # Locked versions of installed packages

```
# frontend

## Technologies Used
- React.js (with Hooks)
- Material UI
- Axios (for API calls)
- Tailwind CSS  
- React Router Dom
- Vite (for blazing fast development)
- ESLint (code quality)


```
frontend/
│
├── public/ # Static assets
│
├── src/
│ ├── api/
│ │ └── index.js # Axios API config and endpoints
│ │
│ ├── components/ # Reusable UI components
│ │ ├── Button.jsx
│ │ ├── Card.jsx
│ │ ├── GeneratedImageCard.jsx
│ │ ├── GenerateImageForm.jsx
│ │ ├── Index.jsx
│ │ └── NavBar.jsx
│ │
│ ├── pages/ # Route pages
│ │ ├── Home.jsx
│ │ └── Post.jsx
│ │
│ ├── App.jsx # Root component with routing
│ ├── index.css # Global styles
│ ├── main.jsx # Entry point rendering React app
│
├── index.html # Main HTML template
├── vite.config.js # Vite bundler configuration
├── eslint.config.js # ESLint configuration
├── .gitignore
├── package.json # Project metadata and dependencies
└── package-lock.json

```