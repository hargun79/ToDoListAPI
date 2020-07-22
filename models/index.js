var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect("mongodb+srv://SINGHHR:hello123@cluster0-ucnr1.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
