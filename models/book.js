// File name: midterm
// Author's name: Haoren Qu
// student ID: 301180297
// Web App name: booklist
let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);