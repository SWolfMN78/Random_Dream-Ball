// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// use Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// require("./controllers/htmlRoutes.js")(app);
// require("./controllers/athleteRoutes.js")(app);
// require("./controllers/ownerRoutes.js")(app);
var htmlRoutes    = require("./controllers/htmlRoutes.js");
var athleteRoutes = require("./controllers/athleteRoutes.js");
var ownerRoutes   = require("./controllers/ownerRoutes.js");
app.use(htmlRoutes);
app.use(athleteRoutes);
app.use(ownerRoutes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
