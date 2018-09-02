var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next){
  res.render('about', {
    title: 'About this site',
    author: 'Jakob Vendegna',
    content: 'Created for a quick reference for myself'
  });
});

router.get('/nav-components', function(req, res, next) {
  res.render('nav-components', {
    title: "Navigation Components and Code"
  });
});

router.get('/headings', function(req, res, next) {
  res.render('headings', {
    title: "Fancy Headings"
  });
});

module.exports = router;
