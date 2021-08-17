const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subscribe extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'Userid' });
      this.belongsTo(models.Event, { foreignKey: 'Eventid' });
    }
  }
  Subscribe.init({
    Userid: DataTypes.INTEGER,
    Eventid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Subscribe',
  });
  return Subscribe;
};
