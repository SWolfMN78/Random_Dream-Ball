var express = require("express");
var router = express.Router();

router.get("/", function(req, res)
{
  res.render("cover");
});

// display the teamEdit page
router.get("/teamEdit", function(req, res)
{
  console.log("route /teamEdit, id:", req.query.id);
  var obj =
  {
    OwnerId: req.query.id
  }
  res.render("teamEdit", obj);
});

// display the battle page
router.get("/battle", function(req, res) {
  console.log("route /teamEdit, id:", req.query.id);
  var obj =
  {
    OwnerId: req.query.id
  }
  res.render("battle", obj);
});

// Export routes for server.js to use.
module.exports = router;
