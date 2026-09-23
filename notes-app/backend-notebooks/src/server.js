const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const notebookRouter = require("./routes");
const { errorHandler } = require("./middlewares/errorHandler");

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use("/api/notebooks", notebookRouter);

// This must come after the routes
app.use(errorHandler);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB! starting sever");

    app.listen(port, () => {
      console.log(`Notebooks server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Something went wrong!");
    console.error(err);
  });
