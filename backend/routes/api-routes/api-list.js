var router = require("express").Router();
var db = require("../../models")

// An api endpoint that returns a short list of items
router.get('/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});


router.get("/getAll", (req, res) => {
    var newList = ["this is an api test"];
    res.json(newList);
})

module.exports = router;
