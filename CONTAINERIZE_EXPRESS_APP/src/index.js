const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;

const users = [];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Hello from ${process.env.APP_NAME}`);
});

// Get registered user
app.get("/users", (req, res) => {
  return res.json({ users });
});

// Register a new user
app.post("/users", (req, res) => {
  const newUserId = req.body.userId;

  if (!newUserId) {
    return res.status(400).send("Missing userId");
  } else if (users.includes(newUserId)) {
    return res.status(400).send("userId already exists");
  }

  users.push(newUserId);
  return res.status(200).send("User registered");
});

// Delete registered user
app.delete("/users/:userId", (req, res) => {
  const deleteUserId = req.params.userId;

  const index = users.indexOf(deleteUserId);

  if (index === -1) {
    return res.status(404).send("User not found");
  }

  users.splice(index, 1); // mutates the array in place, no reassignment
  return res.status(200).send("user deleted");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
