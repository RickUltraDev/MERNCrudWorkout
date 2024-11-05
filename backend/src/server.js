// Imports used
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv").config();

// Express
const app = express();
const mongoose = require('mongoose');

//Middleware to see status of requests
app.use(morgan("dev"));
app.use(cors());

//Cross origin resources to share info between domains (conection with frontend)
app.use(cors({ origin: ["http://localhost:5173"], credentials: false }));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: false }));


// * API Endpoints
// * Important: All routes will have a prefix for each route
app.use("/api/workouts", require("./routes/workoutRoutes"));

//Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // * Important: Set port on 4200 for server with an .env file
        app.listen(process.env.PORT, (err) => {
            if (err) {
                console.log("Server error: " + `${err}`);
            } else {
                console.log("Connected with mongoDB and Server on port: " + process.env.PORT);
            }
        });
    })
    .catch((error) => {
        console.log(error);
    })
