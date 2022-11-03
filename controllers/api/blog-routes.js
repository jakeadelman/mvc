const router = require("express").Router()
const { Blog, Comment } = require("../../models/index.js")

router.post("/comment", async (req, res) => {
    console.log(req.body)
    let comment = await Comment.create({
        content: req.body.content,
        user_id: req.session.user_id,
        blog_id: parseInt(req.body.post_id)
    })
    console.log(comment)
})

//Create new post
router.post("/createpost", async (req, res) => {
    let post = await Blog.create({
        title: req.body.title,
        content: req.body.content,
        creator: req.session.user_id
    })
    console.log(post)
    res.status(200).send("post created")
})

// // CREATE new user
// router.post('/', async (req, res) => {
//     try {
//         const dbUserData = await User.create({
//             // username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//         });

//         req.session.save(() => {
//             req.session.loggedIn = true;

//             res.status(200).json(dbUserData);
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // Login
// router.post('/login', async (req, res) => {
//     try {
//         const dbUserData = await User.findOne({
//             where: {
//                 email: req.body.email,
//             },
//         });

//         if (!dbUserData) {
//             res
//                 .status(400)
//                 .json({ message: 'Incorrect email or password. Please try again!' });
//             return;
//         }
//         bcrypt.compare(req.body.password, dbUserData.password, function (err, result) {


//             // const validPassword = await dbUserData.checkPassword(req.body.password);

//             if (!validPassword) {
//                 res
//                     .status(400)
//                     .json({ message: 'Incorrect email or password. Please try again!' });
//                 return;
//             }

//             req.session.save(() => {
//                 req.session.loggedIn = true;

//                 res
//                     .status(200)
//                     .json({ user: dbUserData, message: 'You are now logged in!' });
//             });
//         })
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
module.exports = router;    