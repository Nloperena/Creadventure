module.exports = function(sequelize, DataTypes) {
  var pc = sequelize.define("pc", {
    pokedex_number: DataTypes.INTEGER,
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    isShiny: DataTypes.BOOLEAN,
    type1: DataTypes.STRING,
    type2: DataTypes.STRING,
    nature: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    sp_attack: DataTypes.INTEGER,
    sp_defense: DataTypes.INTEGER,
  });
  return pc;
};
