const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route to serve the quiz page
app.get("/quiz", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "quiz.html"));
});

// Route to serve the goals page
app.get("/goals", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "goals.html"));
});

// Route to serve the resources page
app.get("/resources", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "resources.html"));
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
