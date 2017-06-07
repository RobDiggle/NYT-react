var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var newArticleSchema = Schema({
	title: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true,
	}
});

var newArticle = mongoose.model('newArticle', newArticleSchema);

module.exports = newArticle;