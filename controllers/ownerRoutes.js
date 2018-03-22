var db = require("../models");

module.exports = function(app) {
  app.get("/api/owners", function(req, res) {
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
  app.post("/api/owners/new", function(req, res) {
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
}
