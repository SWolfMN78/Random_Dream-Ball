var express = require("express");
var router = express.Router();

// Import the model (athlete.js) to use its database functions.
var db = require("../models");
// Create all our routes and set up logic within those routes where required.

// GET route for getting all of the athletes




///////////////////////////////////////   

router.get("/", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Athlete.findAll({}).then(function(dbResult) {
    var athletes = [];

    dbResult.map(function(athlete) {
      athletes.push(athlete.dataValues);
    });

    // We have access to the burgers as an argument inside of the callback function
    res.render('index', { athletes: athletes });
  });  
});
              
// POST route for saving a new athlete. We can create a athlete using the data on req.body
router.post("/api/athletes", function(req, res) {
  console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Athlete.create({
      athleteName: req.body.athleteName,
      ownerID: req.body.ownerID
    }).then(function(dbResult) {
      // We have access to the new athlete as an argument inside of the callback function
      res.json(dbResult);
    });
});

// PUT route for updating burgerss. We can access the updated athlete in req.body
router.put("/api/athletes/:id", function(req, res) {
  // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
  console.log(req.body);
  db.Athlete.update({
    athleteName: req.body.athleteName,
    ownerID: req.body.ownerID
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(dbResult) {
    console.log(dbResult);
    res.json(dbResult);
  });
});

// DELETE route for deleting athletes. We can access the ID of the burger to delete in
  // req.params.id
router.delete("/api/athletes/:id", function(req, res) {
  db.Athlete.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbResult) {
    res.json(dbResult);
  });
});


/////////////////////////////

router.get("/", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Owner.findAll({}).then(function(dbResult) {
    var owners = [];

    dbResult.map(function(owner) {
      owners.push(owner.dataValues);
    });

    // We have access to the burgers as an argument inside of the callback function
    res.render('index', { owners: owners });
  });
});

// POST route for saving a new owner. We can create a athlete using the data on req.body
router.post("/api/owners", function(req, res) {
  console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Owner.create({
      userName: req.body.userName,
      teamName: req.body.teamName,
      passWord: req.body.passWord
    }).then(function(dbResult) {
      // We have access to the new owner as an argument inside of the callback function
      res.json(dbResult);
    });
}); 

// Export routes for server.js to use.
module.exports = router;
