class NotFoundError extends Error {
  constructor(message, notebookId = null) {
    super(message);
    this.statusCode = 404;
    this.notebookId = notebookId;
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

const errorHandler = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: err.message || "Internal server error",
  });
};

module.exports = {
  errorHandler,
  NotFoundError,
  BadRequestError,
};
