var db = require("../models");
var path = require("path")
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/test", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("test", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/account",function(req,res){
    res.render("account")
  })

  app.get("/login/:user", function(req, res) {
    db.userbase.findOne({ where: { username: req.params.user } }).then(function(data) {
      console.log("User in route ", data)

      var obj = {
        userUser: data
      }
      res.render("account", obj);
      
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  

  
};
