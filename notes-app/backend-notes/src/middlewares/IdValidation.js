const mongoose = require("mongoose");

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Notebook not found" });

  next();
};

module.exports = {
  validateId,
};
