const router = require("express").Router()
const blogRoutes = require("./blog-routes.js")
const authRoutes = require("./auth.js")

router.use("/", blogRoutes)
router.use("/auth", authRoutes)

module.exports = router