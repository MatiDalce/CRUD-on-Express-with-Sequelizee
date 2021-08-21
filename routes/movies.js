var express = require('express');
var router = express.Router();
const moviesController = require("../controllers/moviesController")


/* GET MOVIES listing. */
router.get('/', moviesController.list)
router.get("/crear", moviesController.create)


module.exports = router;


