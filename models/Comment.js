const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Comment extends Model { }

Comment.init({
    content: { type: DataTypes.STRING },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        }
    },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "post",
            key: "id"
        }
    }
},
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: "comment"
    })

module.exports = Comment