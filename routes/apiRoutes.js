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

  app.post("/api/caught/:user", function(req,res){
    db.pc.create({
      pokedex_number: req.body.pokedex_number,
      name: req.body.name,
      owner: req.params.user,
      isShiny: req.body.isShiny,
      type1: req.body.type1,
      type2: req.body.type2,
      nature: req.body.nature,
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      speed: req.body.speed,
      sp_attack: req.body.sp_attack,
      sp_defense: req.body.sp_defense,
    })
  })

  app.get("/api/wildPokemon", function(req, res){
    let randomNum = Math.floor(Math.random()*493 +1)
    db.pokedex.findAll({where:{pokedex_number:randomNum}}).then(function(data){
      res.json(data)
    })
  })

  app.get("/api/billspc/:user", function(req, res){
    db.pc.findAll({where:{owner:req.params.user}}).then(function(data){
      res.json(data)
    })
  })

  app.get("/api/natures", function(req,res){
    db.nature.findAll({}).then(function(data){
      res.json(data)
    })
  })
};
