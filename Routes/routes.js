const express = require('express');




const router = express.Router()

router.post('/submit',(req,res)=>{
  console.log(req.body);
  res.send(`<h1>The data send to log</h1>`)

})

module.exports = router
