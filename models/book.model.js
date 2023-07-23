const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  stars: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Book", BookSchema);
