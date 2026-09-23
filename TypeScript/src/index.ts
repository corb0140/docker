import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Hello from port ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
