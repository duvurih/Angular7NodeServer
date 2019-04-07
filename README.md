# Scope of Work
- The Movies API is consumed and displayed the list of movies using virtual scroll component of Angular 7. The API service is implented using Node.js, Express.Js, Axiom (Promises based HTTP Client)
- The Flicker API is consumed and displayed the list of Images based on the search criteria. The front-end is implemented using angular material UI components and API's are implemented using Node.js, Express.js, Axiom (promises based HTTP Client)
- Every employee can capture the observations based on discussion. These discussion are captured based on Employee ID, location and out-come in the MongoDB database. The API's are implemented using Node.js, Express.js, Mongoose (ORM) to connect to MongoDB database. Every employee can view the discussion which he has stored based on employee identification number.

# Angular7NodeServer
Angular 7 + Node Server + ExpressJs + Axios + Mongoose + MongoDB
- Angular 7
- Angular Material - UI Material Components
- Express - is a web application framework for Node.js
- MongoDB - MongoDB can be setup locally or use cloud based solutions
- Node.js - Java Script runtime engine
- Mongoose (ORM) Object Modeling Tool for Node.js
- Axiox - Promise based HTTP client for the browser and Node.js

# MongoDB Setup
- Start MongoDB >net start MongoDB
- Go to MongoDB Console >mongo
- Created Database >use mycustomers
- Create User: > db.createUser({ user:"testuser", pwd:"testuser", roles:["readWrite","dbAdmin"] });
- Create Collection >db.createCollection('financials');
- Show Collections >show collections
- Make sure to change the user credentials in the application

Now MongoDB is SETUP Completed

# Server Project Build and Run
- npm install
- npm run dev

# Client Project Build and Run
- npm install
- ng serve
