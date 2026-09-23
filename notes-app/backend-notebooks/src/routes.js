const express = require("express");
const mongoose = require("mongoose");
const { Notebook } = require("./models");
const { validateId } = require("./middlewares/IdValidation");
const {
  BadRequestError,
  NotFoundError,
} = require("./middlewares/errorHandler");

const notebookRouter = express.Router();

notebookRouter.post("/", async (req, res, next) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      throw new BadRequestError("Name is required");
    }

    const notebook = new Notebook({ name, description });
    await notebook.save();

    res.status(201).json({
      message: "Notebook stored successfully",
      data: notebook,
    });
  } catch (err) {
    next(err);
  }
});

notebookRouter.get("/", async (req, res, next) => {
  try {
    const notebooks = await Notebook.find();

    return res.status(200).json({ data: notebooks });
  } catch (err) {
    next(err);
  }
});

notebookRouter.get("/:id", validateId, async (req, res, next) => {
  try {
    const notebook = await Notebook.findById(req.params.id);

    if (!notebook) {
      throw new NotFoundError("Notebook not found");
    }

    res.status(200).json({
      data: notebook,
    });
  } catch (err) {
    next(err);
  }
});

notebookRouter.put("/:id", validateId, async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const notebook = await Notebook.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true },
    );

    if (!notebook) {
      throw new NotFoundError("Notebook not found");
    }

    res.status(200).json({
      message: "Notebook updated successfully",
      data: notebook,
    });
  } catch (err) {
    next(err);
  }
});

notebookRouter.delete("/:id", validateId, async (req, res, next) => {
  try {
    const notebook = await Notebook.findByIdAndDelete(req.params.id);

    if (!notebook) {
      throw new NotFoundError("Notebook not found");
    }

    res.status(200).json({
      message: "Notebooks deleted successfully",
      data: notebook,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = notebookRouter;
