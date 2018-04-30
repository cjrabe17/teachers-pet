const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes');

// NPMs for authentication
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.use(routes);

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://teacherspet.auth0.com/.well-known/jwks.json"
  }),
  audience: 'localhost:3001',
  issuer: 'https://teacherspet.auth0.com/',
  algorithms: ['RS256']
});

// Start the API server
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});