const router = require("express").Router()
const { Blog, Comment, User } = require("../models/index.js")

router.get("/", async (req, res) => {
    const blogPosts = await Blog.findAll()

    const blogs = blogPosts.map((blog) =>
        blog.get({ plain: true })
    );
    console.log(blogs)
    console.log(req.session.loggedIn)

    res.render("home", {
        blogs,
        loggedIn: req.session.loggedIn,
    })
})


router.get("/blog/:id", async (req, res) => {
    try {
        let singleBlog = await Blog.findOne({ where: { id: req.params.id } })
        let comments = await Comment.findAll({ where: { blog_id: req.params.id }, raw: true, include: { model: User } })
        singleBlog = singleBlog.get({ plain: true })


        console.log(comments, "THIS COMMENTS")
        res.render("single-blog", { singleBlog, comments, loggedIn: req.session.loggedIn })
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});


router.get("/addpost", (req, res) => {
    res.render("addpost")
})


module.exports = router;