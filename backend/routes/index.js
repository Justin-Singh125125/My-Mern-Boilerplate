const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api-routes");

// API Routes
router.use("/api", apiRoutes);


module.exports = router;