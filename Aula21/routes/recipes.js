var express = require('express');
var router = express.Router();

/* GET page of recipes. */
router.get('/', function(req, res, next) {
  res.render('recipes');
});

module.exports = router;