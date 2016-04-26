var mongoose = require('mongoose');

//create a new schema
var PostSchema = new mongoose.Schema({
	title: String,
	link: String,
	upvotes: {type: Number, default: 0},
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

//setup method
PostSchema.methods.upvote = function(cb) {
	this.upvotes += 1;
	this.save(cb);
};

PostSchema.methods.downvote = function(cb) {
	this.upvotes -= 1;
	this.save(cb);
};

mongoose.model('Post', PostSchema);