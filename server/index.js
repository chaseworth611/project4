import express from 'express';
import cors from 'cors';
import db from './dbConnection.js'
import userRoutes from './Routers/user.js';
// Add and import your route files here, Example:
// import yourRoute from './Routers/yourRoute.js'

const app = express();

app.use(express.json());  // To parse JSON bodies in requests
app.use(cors());   
app.use("/api/login", userRoutes)      // To allow requests from all origins (good for development)

// Add your route handlers here, Example:
// app.use('/your-endpoint', yourRoute)

app.get('/', (req, res) => {
  res.send("Server running");
});

app.listen(4000, () => {
  console.log("Listening at http://localhost:4000");
});