const express = require("express");
const genresRouter = require("./genresRoutes");
const moviesRouter = require("./moviesRoutes");

const router = express.Router();

router.use(genresRouter)
router.use(moviesRouter)


module.exports = router;
