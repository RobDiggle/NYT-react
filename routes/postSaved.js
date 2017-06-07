var newArticle = require('../models/newArticle');

module.exports = function(req, res) {


  var newArticle = new newArticle({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  });

  newArticle.save(function(err) {
    if (err) {
      res.json({status: 'error'})
    } else {

      res.json({status: 'saved'})
    }
  });
  
}