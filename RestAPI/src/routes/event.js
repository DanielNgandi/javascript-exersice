const express = require("express");
const fs = require("fs");
const path = require("path");
const { check, validationResult, matchedData, checkSchema } = require("express-validator");

const { createValidationSchema } = require('../utils/validationschema.js');
const { postEvent, putEvent, patchEvent, deleteEvent, getEvents } = require('../controller/controller.js')

const router = express.Router();

let events = [];

// Read file to check if it exists and load events
fs.readFile(path.join(__dirname, "../events.json"), "utf8", (err, data) => {
  if (err && err.code !== "ENOENT") {
    console.error("Error reading file:", err);
    return;
  }

  if (data) {
    try {
      events = JSON.parse(data);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }
});

// Middleware to resolve user by index
const resolveUserByIndex = (req, res, next) => {
  const { params: { id } } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400);

  const findUserIndex = events.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);

  req.findUserIndex = findUserIndex;
  next();
};

// Route to post new objects
router.post("/", checkSchema(createValidationSchema), [
  check('name').notEmpty().withMessage('Name cannot be empty'),
  check('dname').notEmpty().withMessage('dname cannot be empty')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data = matchedData(req);
  const { name, dname } = data;

  const nextId = events.length > 0 ? events[events.length - 1].id + 1 : 1;
  const newEvent = { id: nextId, name, dname };

  events.push(newEvent);

  fs.writeFile(
    path.join(__dirname, "../events.json"),
    JSON.stringify(events, null, 2),
    (err) => {
      if (err) {
        return res.status(500).send({ message: "Error writing file" });
      }
      res.status(201).send(newEvent);
    }
  );
});

// Route to get all events
router.get("/", (req, res) => {
  res.send(events);
});

// Route to update an event by replacing it completely
router.put("/:id", resolveUserByIndex, (req, res) => {
  const { findUserIndex } = req;
  const { body } = req;
  const parsedId = parseInt(req.params.id);

  events[findUserIndex] = { id: parsedId, ...body };
  res.sendStatus(200);
});

// Route to partially update an event
router.patch("/:id", resolveUserByIndex, (req, res) => {
  const { findUserIndex } = req;
  const { body } = req;
  events[findUserIndex] = { ...events[findUserIndex], ...body };
  console.log('User updated');
  return res.sendStatus(200);
});

// Route to delete an event
router.delete("/:id", resolveUserByIndex, (req, res) => {
  const { findUserIndex } = req;

  events.splice(findUserIndex, 1);

  fs.writeFile(
    path.join(__dirname, "../events.json"),
    JSON.stringify(events),
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).send({ message: "Error writing file" });
      }
      console.log("Event deleted");
      res.sendStatus(200);
    }
  );
});

module.exports = router;
