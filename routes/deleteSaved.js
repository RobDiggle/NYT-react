var newArticle = require('../models/newArticle');

module.exports = function(req, res) {

  newArticle
    .remove({_id: req.params.id})
    .exec(function(err,data) {
      if (err) {
      res.json({status: 'error'})
    } else {
      res.json({status: 'deleted'})
    }
  })
}