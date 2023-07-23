const BookModel = require("../models/book.model");

const mainController = async (req, res) => {
  try {
    const data = await BookModel.find({});

    res.render("index", { data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = mainController;
