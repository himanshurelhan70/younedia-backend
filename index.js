const express = require("express");
const app = express();

// cors
const cors = require('cors');
app.use(cors());

//load config from env file
require("dotenv").config();

//import routes for Employee API
const employeeRoutes = require("./routes/route");

//middleware to parse json request body
app.use(express.json());

//mount the Employee API routes
app.use("/api/v1", employeeRoutes);




//start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

//connection to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE</h1>`);
})