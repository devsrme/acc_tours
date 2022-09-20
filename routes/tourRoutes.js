const router = require("express").Router();
const increaseViewCount = require("../middlewares/increaseViewCount");
const cheapestTours = require("../middlewares/cheapestTours");
const trendingTurs = require("../middlewares/trendingTurs");
const tourControllers = require("../controllers/tourControllers");

// ROUTES

//  create new tour and get all tours
router
  .route("/tours")
  .post(tourControllers.createTour)
  .get(tourControllers.getAllTours);

// get cheapest tours
router.route("/tour/cheapest").get(cheapestTours, tourControllers.getAllTours);

// get trending tours
router.route("/tour/trending").get(trendingTurs, tourControllers.getAllTours);

// increase viewCount and get single tour
router.route("/tours/:id").get(increaseViewCount, tourControllers.getTour);

// update a tour
router.route("/tour/:id").patch(tourControllers.updateTour);

// exports router

module.exports = router;
