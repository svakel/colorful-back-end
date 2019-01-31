'use strict';

const express = require('express'),
    app = express(), 
    PORT = 3001,
    mongoose = require('mongoose'),
    Color = require('./api/models/colorfulModel'),
    Cart = require('./api/models/cartModel'),
    bodyParser = require('body-parser');


// Import the library:
var cors = require('cors');

// Then use it before your routes are set up:
app.use(cors());

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/colorful');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/colorfulRoutes'); //importing route
const cartsRoutes = require('./api/routes/cartRoutes'); //importing route
routes(app); // register the route
cartsRoutes(app);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// app.get('/', (req, res) => {
//     res.send('<h1>Hello world!</h1>')
// })

// app.get('/colors', (req, res) => {
//     res.json(colors)
// })

// app.get('/cart', (req, res) => {
//     res.json(cart)
// })

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });