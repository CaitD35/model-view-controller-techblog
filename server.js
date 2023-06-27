// Import dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

// Import Sequelize and models
const { Sequelize } = require('sequelize');
const { User, Post, Comment } = require('./models');

// Create an instance of Express app
const app = express();

// Configure the port
const PORT = process.env.PORT || 3000;

// Configure Handlebars as the view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Configure the session middleware
app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
  })
);

// Body parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  // Fetch all posts from the database and render the homepage template
  Post.findAll({ include: [User] }).then((posts) => {
    res.render('index', { posts });
  });
});

// Other routes and controllers go here

// Sync Sequelize models with the database and start the server
async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // You can pass { force: true } inside sync() for development purposes to drop and recreate tables
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

// Start the server
startServer();
