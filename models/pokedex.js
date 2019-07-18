module.exports = function(sequelize, DataTypes) {
  var pc = sequelize.define("pc", {
    pokedex_number: DataTypes.INTEGER,
    name: DataTypes.STRING,
    generation: DataTypes.INTEGER,
    type1: DataTypes.STRING,
    type2: DataTypes.STRING,
    classification: DataTypes.TEXT,
    height_m: DataTypes.DECIMAL(11, 2),
    weight_kg: DataTypes.DECIMAL(11, 2),
    abilities: DataTypes.TEXT,
  });
  return pc;
};
