var orm = require("../config/orm.js");


var burger = {

	all: function(cb) {
    	orm.all("burgers", function(res) {
     	cb(res);
    });
  },

	 // The variables cols and vals are arrays.
	 create: function(cols, vals, cb) {
	    orm.create("burgers", cols, vals, function(res) {
	    cb(res);
	 });
   },



//   passing these arguments into below function
//   burger.update({devaured: req.body.sleepy}, condition, function() {res.redirect("/");});
    update: function(objColVals, condition, cb) {
    	orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
    });
  }

};

// export the database functions for the controller (burgers_controller.js)
module.exports = burger;