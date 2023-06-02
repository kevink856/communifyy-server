// Import dependencies
const express = require("express");
const cors = require("cors");
const top = require("./routes/top.js");
require("express-async-errors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "https://kevink856.github.io" }));

app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD");
    res.header("Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,Origin,X-Requested-With,Accept");
});

// Load the /posts routes
app.use("/top", top);

module.exports = app;