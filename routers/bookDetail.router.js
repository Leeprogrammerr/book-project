const express = require("express");
const bookDetailController = require("../controllers/bookDetail.controller");
const bookDetailRouter = express.Router();
bookDetailRouter.get("/:slug", bookDetailController);
module.exports = bookDetailRouter;
