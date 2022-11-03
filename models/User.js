const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")
const bcrypt = require("bcrypt")

class User extends Model { }

User.init({
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
    },
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: "user"

})

module.exports = User