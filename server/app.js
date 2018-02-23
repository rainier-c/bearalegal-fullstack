// Require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// Require custom routes
const routes = require('../routes/routes.js');

// Create express app
const app = express();

// Load middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Log incoming responses
app.use('*', (req, res, next) => {
  console.log(`Received ${req.method} for ${req.url}`);
  if (req.method === 'POST' && req.body) {
    console.log(`Request body:\n`, req.body);
  }
  next();
});

// Serve React client application
app.use(express.static(path.join(__dirname, '../client/public')));

// Use custom routes
app.use('/api', routes);

// Listen on env port or port 3000
const server = app.listen(process.env.PORT || 3000, () => {
  let port = server.address().port;
  console.log(`Bearalegal server running at ${server.address().address} on port ${server.address().port}`);
});
