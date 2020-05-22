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
    type: String
  },
  publicationYear :{
    type: String,
    
  },
  abtBook :{
    type: String,
    
  },
})

module.exports = mongoose.model('Book',BookSchmea,'bookData')