module.exports = function(sequelize, DataTypes) {
    var Userbase = sequelize.define("userbase", {
      username: DataTypes.STRING,
      password: DataTypes.STRING
    });
    return Userbase;
  };
  