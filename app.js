const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utility/expressError.js');
const listingRoutes = require('./Routes/listing.js');
const review = require('./Routes/review.js');
const session = require('express-session');
const MongoStore = require('connect-mongo'); // For session storage in MongoDB
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');
const userRoutes = require('./Routes/user.js');
require('dotenv').config();

// Database URL: prefer environment variable, fall back to local MongoDB for development
const dbUrl = process.env.ATLASDB_URL || 'mongodb://127.0.0.1:27017/coursecritic';
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Global error logging for debugging
// Connect to MongoDB
main().catch(err => {
  console.error('Failed to connect to MongoDB:', err);
  process.exit(1);
});

async function main() {
  await mongoose.connect(dbUrl);
  console.log('Connected to MongoDB');
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: { secret: process.env.SECRET },
  touchAfter: 24 * 3600,
});
store.on('error', function(e) {
  console.log('Session Store Error', e);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET || 'change-this-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
  },
};

// app.get('/', (req, res) => {
//   res.send("i am root");
// });



app.use(session(sessionOptions));
app.use(flash());//atfirst always flash then use it in routes

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.user;
  res.locals.ADMIN_WHATSAPP = process.env.ADMIN_WHATSAPP || '919907876770';
  next();
});
 
app.use('/listings', listingRoutes);
app.use('/listings/:id/reviews', review);
app.use('/', userRoutes);

// 404 Route Handler
app.use((req, res, next) => {
  next(new ExpressError('Page Not Found', 404));
});

// Error-handling middleware (must have 4 arguments)
app.use((err, req, res, next) => {
  const { statusCode = 500, message = 'Something went wrong' } = err;
  res.status(statusCode).render('error.ejs', { message });
});

// Start server on environment port (for deploy) or 3000 for local dev
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});