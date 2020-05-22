const mongoose = require('mongoose');
const config = require('config')


const opt = {
  useNewUrlParser: true, useUnifiedTopology: true
}
const mongoUri = config.get('mongoDB.mongoUri')
mongoose.connect(mongoUri,opt)
.then(err =>console.log(`MongoDB connected Successfully :ghost:`))
.catch(err => console.log(err))