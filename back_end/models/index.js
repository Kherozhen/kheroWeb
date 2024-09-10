{/* const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: './database.sqlite'
});

const Users = sequelize.define('users', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamps: false });

sequelize.sync(); // Synchronise les modèles avec la base de données

module.exports = {
  sequelize,
  users: Users
}; */}