// Import dependencies
const express = require("express");
const router = express.Router();
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(process.env.REACT_APP_DB_URI);

// Test get
router.get("/", async (req, res) => {
    res.send("Hello world!");
});

// Add a new user's top songs / artists data to the collection
router.post("/", async (req, res) => {
    await client.connect();
    let db = client.db("communifyy");
    let collection = db.collection("top");
    let newDocument = req.body;
    let result = collection.insertOne(newDocument);
    res.send(result).status(204);
});

module.exports = router;