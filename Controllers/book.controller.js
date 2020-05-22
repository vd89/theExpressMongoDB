const bookData = require('../Models/Book')

const create = async (req,res) => {
  // console.log(req.body);
  const book_data = new bookData(req.body)
  try {
    await book_data.save()
    res.send(`<h1>The data is send to log </h1>`)
  } catch (err) {
    res.send(err)
  }  
}


module.exports = {create}


