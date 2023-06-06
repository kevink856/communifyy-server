// Import dependencies
const express = require("express");
const cors = require("cors");
const top = require("./routes/top.js");
require("express-async-errors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// Load the /posts routes
app.use("/top", top);

module.exports = app;