
const router = require("express").Router();
const listRoutes = require("./api-list");
const bookRoutes = require("./books");

// Book routes
router.use("/", listRoutes); // Avoid a 404 error...
router.use("/list", listRoutes);
router.use("/books", bookRoutes);

module.exports = router;