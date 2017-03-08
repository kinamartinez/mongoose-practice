var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peopleCollectionSchema = new Schema({
    hair:String ,
    eyes: String,
    weight: Number,
    height: Number,
    salary: Number,
    numKids: Number,
    kids:[],
});

var Person = mongoose.model('PersonModel', peopleCollectionSchema);
module.exports = Person;