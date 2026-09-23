const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotebookSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  // create the createAt and updatedAt timestamps automatically
  { timestamps: true },
);

const Notebook = mongoose.model("Notebook", NotebookSchema);

module.exports = { Notebook };
