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
    const db = client.db("communifyy");
    const collection = db.collection("top");

    // Upsert top data
    const query = { _id: req.body._id };
    const updateDocument = { $set: req.body, };
    const options = { upsert: true };
    const result = collection.updateOne(query, updateDocument, options);

    res.send(result).status(204);
});

module.exports = router;