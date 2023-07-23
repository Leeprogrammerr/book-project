const BookModel = require("../models/book.model");
const bookDetailController = async (req, res) => {
  try {
    const slug = req.params.slug;
    const data = await BookModel.findOne({ slug });

    if (!data) {
      return res.status(404).json("not found");
    }
    res.render("bookDetail", { data });
  } catch (error) {}
};

module.exports = bookDetailController;
