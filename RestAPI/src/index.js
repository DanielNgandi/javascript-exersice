const express = require("express");
const path = require("path");

const port = 3000;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const eventsRouter = require('./routes/event.js');

// Use routes
app.use('/api/events', eventsRouter);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});