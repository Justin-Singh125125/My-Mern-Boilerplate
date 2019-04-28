
const router = require("express").Router();
const listRoutes = require("./api-list");
const bookRoutes = require("./books");

// Book routes
router.use("/list", listRoutes);
router.use("/books", bookRoutes);

module.exports = router;