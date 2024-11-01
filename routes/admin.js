var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('hlo')
  res.render('admin/admindashboard');
});

module.exports = router;
