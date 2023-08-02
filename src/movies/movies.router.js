const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:movieId([0-9]+)/reviews").get(controller.reviewsByMovieId).all(methodNotAllowed)
router.route("/:movieId([0-9]+)/theaters").get(controller.theatersByMovieId).all(methodNotAllowed);
router.route("/:movieId([0-9]+)").get(controller.read);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;