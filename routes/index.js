var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('park').select().then(function(parks){
    res.render('index', { list:parks });
  })
});

router.get('/:id', function (req,res,next){
  knex('park').where({id:req.params.id}).first().then(function(nature){
    res.render('detail', {nature:nature})
  })
})

router.get('/parks', function(req, res, next){
  knex('state').select().then(function(states){
    res.render('parks', {states: states})
  })
})
router.post('/parks', function(req, res, next){
  knex('park').insert(req.body).then(function(){
    res.redirect('/')
  }).catch(function(error){
    next(error)
  })
})
module.exports = router;
