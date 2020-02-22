// Import stuff
const path = require('path');
const express = require('express');
const hbs = require('hbs');

//========================
// APP CONFIGURATION
//========================

const indexRoutes = require('./routes/index');

// Configure Express
const app = express();
const port = process.env.PORT || 3000;

// Configure static file paths
const publicPath = path.join(__dirname, '../public');
const veiwsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Configure HBS and view paths
app.set('view engine', 'hbs');
app.set('views', veiwsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

//========================
// ROUTES
//========================

app.use('/', indexRoutes);

// Start server on port...
app.listen(port, () => {
  console.log(`Server is up on port ${port}...`);
});
