const express = require('express');
const path = require("path");
const app = express();
const apiRoutes = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
//this is very important to have for making api calls
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Router middleware first
app.use(apiRoutes);

// Stuff in client should be build already built
app.use(express.static(path.join(__dirname, "../client/build")));

// If no API routes are hit, send the React app
// this might need some fixing
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://test:testing1@ds145289.mlab.com:45289/sick-database";

mongoose.connect(MONGODB_URI, () => {
    console.log(MONGODB_URI + " Connected to Mongodb");
})
app.listen(PORT, () => {
    // console.log(process.env.NODE_ENV)
    console.log(`port listening on port ${PORT}`);
})