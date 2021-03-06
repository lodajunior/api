const http = require('http');
const path = require('path');
const cors = require('cors');

const express = require('express'), app = express();
const favicon = require('serve-favicon');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errorHandler = require('errorhandler');

const helmet = require('helmet');

// Import routes
const userRoute = require('../routes/user.route');

app.use(cors());

// app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(morgan('dev'));
app.use(methodOverride());
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: 'uwotm8'
// }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use('/users', userRoute);

module.exports = app;