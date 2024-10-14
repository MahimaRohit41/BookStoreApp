const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;