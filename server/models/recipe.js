var mongoose = require("mongoose"),
     Schema = mongoose.Schema,
     objectId = mongoose.Schema.ObjectId;
     
var recipeSchema = new Schema({
     _id: { type: objectId, auto: true },
     name: { type: String, required: true },
     ingridients: { type: String, required: true },
     procedure: { type: String, required: true }
    }, {
     versionKey: false
    });
     
    var recipe = mongoose.model('Recipe', recipeSchema);
     
    module.exports = recipe;