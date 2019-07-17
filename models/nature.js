module.exports = function(sequelize, DataTypes) {
  var nature = sequelize.define("nature", {
    Name: DataTypes.STRING,
    Increase: DataTypes.TEXT,
    Decrease: DataTypes.TEXT,
    Factor: DataTypes.DECIMAL(10,2)
  });
  return nature;
};
