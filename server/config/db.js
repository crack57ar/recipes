    var mongoose = require('mongoose');
    var connection = mongoose.connect('mongodb://localhost/recipe_db');
     
    module.exports = connection;    