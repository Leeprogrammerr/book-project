const express = require("express");
const bookController = require("../controllers/book.controller");

const bookRouter = express.Router();
bookRouter.get("/book", bookController);

module.exports = bookRouter;
