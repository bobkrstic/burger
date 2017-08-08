var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});



router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devaured"
  ], [
    req.body.name, req.body.sleepy
  ], function() {
    res.redirect("/");
  });
});


// whis will catch the user input
// and call update function from burger.js file

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);


// calling this function: update: function(objColVals, condition, cb)
  burger.update({
    devaured: req.body.sleepy
  }, condition, function() {
    res.redirect("/");
  });
});





// Export routes for server.js to use.
module.exports = router;