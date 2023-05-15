const express = require('express');
const router = express.Router();

const validApiKeys = ["5", "6", "7"];

// Check that there is a key
const authenticApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res
      .status(401)
      .json({ message: "API key is missing" });
  }

  if (!validApiKeys.includes(apiKey)) { 
    return res
     .status(403)
     .json({ message: "Invalid API key" });
  }

  next();
};

// Create a new apiKey
router.post("/", (req, res) => {
  const newApiKey = req.body.apiKey;

  if (!newApiKey) {
    return res
      .status(400)
      .json({ message: "API key is required" });
  }

  if (validApiKeys.includes(newApiKey)) {
    return res
      .status(409)
      .json({ message: "API key " + newApiKey + " already exists" });
  }

  validApiKeys.push(newApiKey);
    res
      .status(201)
      .json({ message: "API key added successfully, the new apiKey is: " + newApiKey });
});

// Delete a apiKey
router.delete("/:apiKey", (req, res) => {
  const apiKeyToDelete = req.params.apiKey;

  if (!validApiKeys.includes(apiKeyToDelete)) {
    return res
      .status(404)
      .json({ message: "API key not found" });
  }

  validApiKeys.splice(validApiKeys.indexOf(apiKeyToDelete), 1);
    res
      .status(200)
      .json({ message: "API key " + apiKeyToDelete + " deleted successfully" });
});

// Lista alla Api keys
router.get("/", (req, res) => {
  res.json(validApiKeys)
});

module.exports = { router, authenticApiKey };