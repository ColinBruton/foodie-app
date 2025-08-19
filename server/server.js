import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to local MongoDB
const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
const db = client.db("quickbites");             // database name
const reviewsCollection = db.collection("reviews"); // collection name

console.log("✅ Connected to MongoDB");

// POST: Add new review
app.post("/api/reviews", async (req, res) => {
  const { name, restaurant, review } = req.body;
  if (!name || !restaurant || !review)
    return res.status(400).json({ error: "All fields required" });

  const result = await reviewsCollection.insertOne({ name, restaurant, review });
  res.json({ success: true, id: result.insertedId });
});

// GET: Fetch all reviews
app.get("/api/reviews", async (req, res) => {
  const reviews = await reviewsCollection.find().toArray();
  res.json(reviews);
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
