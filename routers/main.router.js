const express = require("express");
const mainController = require("../controllers/main.controller");
const mainRouter = express.Router();
mainRouter.get("/", mainController);
mainRouter.post("/", (req, res) => {
  console.log(req.body.option);
});
module.exports = mainRouter;
