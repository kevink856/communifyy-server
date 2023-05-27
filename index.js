// Import dependencies
const express = require("express");
const cors = require("cors");
const top = require("./routes/top.js");
require("express-async-errors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "https://kevink856.github.io" }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.next();
});

// Load the /posts routes
app.use("/top", top);

module.exports = app;