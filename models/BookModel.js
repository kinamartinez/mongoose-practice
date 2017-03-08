var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksCollectionSchema = new Schema({
    title:String ,
    author: String,
    pages: {type: Number},
    genres: [String],
    rating: String,
});

var Book = mongoose.model('BookModel', booksCollectionSchema);
module.exports = Book;
