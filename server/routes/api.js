    var express = require('express'),
    router = express.Router();
     
    //routes for user api
    router.use("/recipe", require("../controllers/recipe.api"));
     
    //add here other api routes
     
    module.exports = router;