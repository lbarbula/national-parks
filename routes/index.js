var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('park').select().then(function(parks){
    res.render('index', { list:parks });
  })
});

module.exports = router;
