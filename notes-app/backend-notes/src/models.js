const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  notebookId: {
    type: Schema.Types.ObjectId,
    require: false,
    default: null,
  },
});

const Note = mongoose.model("Notes", NoteSchema);

module.exports = { Note };
