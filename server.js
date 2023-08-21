const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// import sequelize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create the Express.js app
const app = express();
const PORT = process.env.PORT || 3001;

// set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// set up sessions
const sess = {
  secret: 'Blog secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// add express-session and store as Express.js middleware

app.use(session(sess));

// inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express.js middleware that parses incoming requests with JSON payloads
app.use(express.json());
// Express.js middleware that parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));
// Express.js middleware that serves static files
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes

app.use(routes);

// turn on connection to db and server

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
}
);

