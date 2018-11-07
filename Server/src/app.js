const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const logger = console;

const connectionString = 'mongodb://hkindia:indian12@localhost:27017/mycustomers';

const app = express();

//defining routes
const userRoutes = require('./routes/users');
const movieRoutes = require('./routes/movies');
const flickrRoutes = require('./routes/flickrs')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://hkindia:indian12@localhost:27017/mycustomers',{
    useNewUrlParser: true
}).then(db => console.log('db is connected'))
    .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// routes
app.use('/users', userRoutes);
app.use('/movies', movieRoutes)
app.use ('/flickr', flickrRoutes);

// static files

// error handlers
// process.on('unhandledRejection', function(reason, promise){
//     logger.error('Unhandled rejection',{reason: reason, promise: promise});
// });
// process.on('uncaughtException', function(error){
//     logger.error('Uncaught Exception', {message: error.message});
// });

// start server
app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
});