const express = require('express');
const router = express.Router();

//========================
// ROUTE/MISC ROUTES
//========================
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
