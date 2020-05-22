const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BookSchmea = new Schema({
  bookTitle :{
    type: String,
    required: true
  },
  bookSubTitle :{
    type: String,
    required: true
  },
  bookAuthor :{
    type: String,
    required: true
  },
  publication :{
    type: String,
    required: true
  },
  publicationYear :{
    type: String,
    required: true
  },
  abtBook :{
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Book',BookSchmea,'bookData')