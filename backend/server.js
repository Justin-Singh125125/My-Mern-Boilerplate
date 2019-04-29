const express = require('express');
const path = require("path");
const app = express();
const apiRoutes = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
//this is very important to have for making api calls
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve the static files from the React app
if (process.env.NODE_ENV) {
    console.log("we are in production baby");
    app.use(express.static("client/build"));
}



app.use(apiRoutes);

// If no API routes are hit, send the React app
// this might need some fixing
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://test:testing1@ds145289.mlab.com:45289/sick-database";

mongoose.connect(MONGODB_URI, () => {
    console.log(MONGODB_URI + " Connected to Mongodb");
})
app.listen(PORT, () => {
    // console.log(process.env.NODE_ENV)
    console.log(`port listening on port ${PORT}`);
})