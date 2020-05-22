const express = require('express');
const bookCtrl = require('../Controllers/book.controller')



const router = express.Router()
router.post('/submit',bookCtrl.create)
router.get('/books',bookCtrl.list)

module.exports = router
