var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/newUser", function(req, res){
    db.userbase.create({
      username:req.body.username,
      password: req.body.password
    }).then(function(data){res.json(data)})
  })

  app.get("/api/allUser", function(req, res) {
    db.userbase.findAll({}).then(function(data) {
      res.json(data);
    });
  })
};
