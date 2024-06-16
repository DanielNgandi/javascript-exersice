const express = require("express");
const fs = require("fs");
const path = require("path");
const { check, validationResult, query, matchedData , body, checkSchema } = require("express-validator");

const {createValidationSchema}=require('./utils/validationschema.js')

const port = 3000;
const app = express();

// Middleware to parse JSON bodies

app.use(express.json());
  


let events = [];

// Reading file to check if it exists
fs.readFile(path.join(__dirname, "events.json"), "utf8", (err, data) => {
  if (err && err.code !== "ENOENT") {
    console.error("Error reading file:", err);
    return;
  }

  if (data) {
    try {
        // Convert JSON string into a JavaScript object
      events = JSON.parse(data); 
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }
});

// Route to post new objects
app.post("/api/events", checkSchema(createValidationSchema), [
  check('name').notEmpty().withMessage('Name cannot be empty'),
  check('dname').notEmpty().withMessage('dname canot be empty')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const data = matchedData(req)

  const { name, dname } = req.body;

  const nextId = events.length > 0 ? events[events.length - 1].id + 1 : 1;

  const newEvent = {
    id: nextId,
    name,
    dname
  };

  events.push(newEvent);

  fs.writeFile(
    path.join(__dirname, "events.json"),
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
app.get("/api/events", (req, res) => {
  res.send(events);
});

const resolveUserByIndex=(req,res,next) =>{
    const {body, params: {id}}  = req

    const parsedId = parseInt(id)
    if(isNaN(parsedId)) 
        return res.sendStatus(400)

    const findUserIndex = events.findIndex((user) => {
        return user.id === parsedId
    })

    if(findUserIndex === -1)
        return res.sendStatus(404)
    //Binding the findUserIndex to the req obj
    req.findUserIndex = findUserIndex
    next()
}
app.put('/api/events/:id',resolveUserByIndex, (req, res) => {
     
    const {findUserIndex}=req
    const { body } = req;
    const parsedId = parseInt(req.params.id);

   
    events[findUserIndex] = {id: parsedId, ...body }
    res.sendStatus(200)

})
app.patch('/api/events/:id',resolveUserByIndex, (req, res) => {
   
    const {findUserIndex}=req
    const {body}=req
    events[findUserIndex] = {...events[findUserIndex], ...body}
    console.log('User updated')
    return res.sendStatus(200)
})

app.delete('/api/events/:id',resolveUserByIndex, (req, res) => {
    const {findUserIndex}=req
      const { body } = req;
    const { params: {id}}  = req

    events.splice(findUserIndex, 1)

    fs.writeFile(
        path.join(__dirname, "events.json"),
        JSON.stringify(events),
        (err) => {
          if (err) {
            console.error("Error writing file:", err);
            return res.status(500).send({ Message: "Error writing file" });
          }
          console.log("Event deleted");
          res.sendStatus(200);
        }
      );
})


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});