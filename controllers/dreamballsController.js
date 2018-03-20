var express = require("express");
                                      
var router = express.Router();

// Import the model (dreamball.js) to use its database functions.
var db = require("../models");
// Create all our routes and set up logic within those routes where required.

// GET route for getting all of the dreamballs




///////////////////////////////////////   

router.get("/", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.DreamBall.findAll({}).then(function(dbDreamBall) {
    var dreamballs = [];

    dbDreamBall.map(function(dreamball) {
      dreamballs.push(dreamball.dataValues);
    });

    // We have access to the burgers as an argument inside of the callback function
    res.render('index', { dreamballs: dreamballs });
  });  

});         
              

// POST route for saving a new dreamball. We can create a dreamball using the data on req.body
router.post("/api/dreamballs", function(req, res) {
  console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.DreamBall.create({
      charName: req.body.charName,
      ownerID: req.body.ownerID
    }).then(function(dbDreamBall) {
      // We have access to the new dreamball as an argument inside of the callback function
      res.json(dbDreamBall);
    });

});
// PUT route for updating burgerss. We can access the updated dreamball in req.body
router.put("/api/dreamballs/:id", function(req, res) {
  // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
  console.log(req.body);
  db.DreamBall.update({
    charName: req.body.charName,
    ownerID: req.body.ownerID
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(dbDreamBall) {
    console.log(dbDreamBall);
    res.json(dbDreamBall);
  });
});

// DELETE route for deleting dreamballs. We can access the ID of the burger to delete in
  // req.params.id
router.delete("/api/dreamballs/:id", function(req, res) {
  db.DreamBall.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbDreamBall) {
    res.json(dbDreamBall);
  });
      
}); 
/////////////////////////////

router.get("/", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.UserID.findAll({}).then(function(dbUserID) {
    var userids = [];

    dbUserID.map(function(userid) {
      userids.push(userid.dataValues);
    });

    // We have access to the burgers as an argument inside of the callback function
    res.render('index', { userids: userids });
  });  

});

// POST route for saving a new userid. We can create a dreamball using the data on req.body
router.post("/api/userids", function(req, res) {
  console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.UserID.create({
      userName: req.body.userName,
      teamName: req.body.teamName,
      passWord: req.body.passWord
    }).then(function(dbUserID) {
      // We have access to the new userid as an argument inside of the callback function
      res.json(dbUserID);
    });

}); 


// Export routes for server.js to use.
module.exports = router;



