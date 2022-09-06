const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const logger = require('morgan');
// const connectDB = require('./config/database');
// const mainRoutes = require('./routes/main');
// const intakeRoutes = require('./routes/intake');
// const confirmationRoutes = require('./routes/confirmation')
const connectDB = require('/app/config/database');
const mainRoutes = require('/app/routes/main');
const intakeRoutes = require('/app/routes/intake');
const confirmationRoutes = require('/app/routes/confirmation')
const morgan = require('morgan');

// Changed path from ./ {...} to /app for both dotenv and passport

// require('dotenv').config({ path: './config/.env' });
require('dotenv').config({ path: '/app/config/.env' });

// Passport config
require('/app/config/passport')(passport);

connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Adding Morgan for logging
// Use morgan for logging in dev mode
// 'npm run dev' will begin dev mode (with morgan/nodemon)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use('/', mainRoutes);
app.use('/intake', intakeRoutes);
app.use('/signup', mainRoutes);
app.use('/confirmation', confirmationRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
