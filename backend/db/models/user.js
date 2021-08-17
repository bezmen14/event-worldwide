const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Subscribe, { foreignKey: 'id' });
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    City: DataTypes.STRING,
    Name: DataTypes.STRING,
    Userphoto: DataTypes.STRING,
    Userphonenumber: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
