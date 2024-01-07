
### Project Title: React E-commerce App (Flipkart Clone)
  ##Introduction
  
  This project is a React-based e-commerce application, similar to a Flipkart clone. It's designed to provide a comprehensive demonstration of modern web development techniques, including front-end and back-end development, database integration, state management, and deployment.
  
  ##Features
  Front-end: Developed using React, incorporating state management with Redux, Context API, and various React hooks. It also includes react-router-dom for routing and implements an authentication system for login/signup.
  Back-end: The server-side is built using Node.js and Express, structured in an MVC (Model-View-Controller) pattern for efficient project management.
  Database: MongoDB is used for the database, which is interacted with through Mongoose for data modeling.
  Deployment: The front-end is deployed on Netlify, and the back-end is hosted on Render.
  Getting Started
  To get a local copy up and running, follow these simple steps:


Clone the repo
#git clone [](https://github.com/SandeepPatel360/flipCartClone.git)
#git clone [](https://github.com/SandeepPatel360/MernBackend.git)
Install NPM packages
#npm install
Start the local server (runs on port 3000)
#npm start

###Development
##Front-end
State Management: Utilizes Redux, Context API for global state management.
Routing: Uses react-router-dom for navigation.
Authentication: Implements login and signup features.
Database Interaction: Front-end interacts with the database through Redux for state persistence.

##Back-end
MVC Architecture:
Model (M): Includes UserModel and ProductModel for user and product data structures.
Controller (C): Consists of ProductController and UserController for handling business logic.
Router: Manages CRUD (Create, Read, Update, Delete) routes for user and product management.
Database Configuration: Uses MongoDB, leveraging Mongoose for schema definition and data interaction.
Additional Middleware: Implements CORS, body-parser, and dotenv for environment variable management.
Deployment
Front-end: Deployed on Netlify. Accessible at https://ecommerceshopclone.netlify.app/.
Back-end: Hosted on Render, with continuous integration and delivery setup
