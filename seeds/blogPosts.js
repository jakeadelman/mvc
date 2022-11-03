const { Blog } = require('../models/index.js');

const blogPosts = [
    {
        title: 'This is a test blog title',
        content: "This is test content."
    },

];

const seedBlogs = () => Blog.bulkCreate(blogPosts);

module.exports = seedBlogs;