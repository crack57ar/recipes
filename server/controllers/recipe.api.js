var express = require("express"),
     router = express.Router(),
     recipe = require("../models/recipe.js");
     
router.get("/", function(req, res) {
    recipe.find({}, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
})
    
.get("/:id", function(req, res) {
    var id = req.params.id;
    recipe.find({ _id: id }, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
})

.post("/", function(req, res) {
    var obj = req.body;
    var model = new recipe(obj);
    model.save(function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("created");
    });
})
    
.put("/:id", function(req, res) {
    var id = req.params.id;
    var obj = req.body;
     
    recipe.findByIdAndUpdate(id, { name: obj.name, ingridient: obj.ingridient, procedure: obj.procedure }, 
        function(err) {
            if (err) {
                res.send("error");
                return;
            }
        res.send("updated");
    });
})

.delete("/:id", function(req, res) {
    var id = req.params.id;
    recipe.findByIdAndRemove(id, function(err) {
        if (err) {
            res.send("error");
            return;
        }
    res.send("deleted");
    });
});
     
module.exports = router;