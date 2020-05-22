const express = require('express')
const app = express()
const port = process.env.PORT || 8085
const bookRoutes = require('./Routes/routes')

//MiddleWare 

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('Views'))

app.use('/',bookRoutes)


// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`The app started on port ${port}!... // To stop the app Ctl + c`))