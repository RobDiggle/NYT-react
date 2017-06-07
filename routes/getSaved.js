var newArticle = require('../models/newArticle');

module.exports = function(req, res) {
  newArticle
    .find()
    .exec(function(err,data) {
      if (err) {
      res.json({status: 'error'})
    } else {
      res.json(data)
    }
  })
}