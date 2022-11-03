const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Blog extends Model { }

Blog.init({
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    creator: {
        type: DataTypes.INTEGER,
        references: {
            model: "blog",
            key: "id"
        }
    }
}, {
    sequelize: sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: "blog"
})

module.exports = Blog