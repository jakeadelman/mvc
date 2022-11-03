const Blog = require("./Blog.js")
const User = require("./User.js")
const Comment = require("./Comment.js")


Blog.belongsTo(User, {
    foreignKey: "creator",
    onDelete: "CASCADE"
})

User.hasMany(Blog, {
    foreignKey: "creator"
})

Comment.belongsTo(Blog, {
    forignKey: "blog_id",
    onDelete: "CASCADE"
})

Blog.hasMany(Comment, {
    foreignKey: "blog_id"
})

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})


module.exports = { Blog, User, Comment }