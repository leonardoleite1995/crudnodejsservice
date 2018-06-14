var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("Requisição GET");
});

router.post('/', function(req, res, next){
  res.send("Requisição POST");
});

module.exports = router;
