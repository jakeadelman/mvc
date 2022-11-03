const sequelize = require('../config/connection');
const seedBlogs = require('./blogPosts');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedBlogs();

    process.exit(0);
};

seedAll();
