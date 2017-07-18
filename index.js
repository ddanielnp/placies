// all the modules installed and need to require
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')


// mongoose ----------
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/placies'
mongoose.Promise = global.Promise
mongoose.connect(url, {
  useMongoClient: true
}).then(
  function () {
    console.log('connected successfully')
  },
  function (err) {
    console.log('failed to connect')
    console.log(err)
  }
) // ----------
app.use(express.static('public'))
app.engine('handlebars', exphbs(
  // handlebar configurations
  {
    defaultLayout: 'main'
    // partialsDir: 'views/partials'
  }
))
app.set('view engine', 'handlebars')

// setup all files that the project needs to require -----
const placesRoute = require('./routes/placeRoute')

// setup the project routes, no requiring after this line ---------
app.use('/places', placesRoute)

// opening the port
const port = 3000
app.listen(port, function () {
  console.log(`express is running on ${port}`)
})
