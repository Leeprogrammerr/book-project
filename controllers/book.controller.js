const BookModel = require("../models/book.model");

const bookController = async (req, res) => {
  try {
    const data = await BookModel.find({});

    res.render("book", { data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = bookController;
