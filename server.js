const express = require('express');
const Sequelize = require('sequelize');
const config = require('./config/config.json');

const app = express();

const expressHandlebars = require('express-handlebars');
const exphbs = expressHandlebars.create({ defaultLayout: 'main' });

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// Middleware to parse JSON and urlencoded data
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Route Definitions
app.use('/users', require('./routes/userRoutes'));
app.use('/posts', require('./routes/postRoutes'));
app.use('/comments', require('./routes/commentRoutes'));

// This should be after your specific routes to ensure it doesn't overshadow them.
app.get('/', (req, res) => {
  res.send('Welcome to the tech blog!');
});

const sequelize = new Sequelize(config.development);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
