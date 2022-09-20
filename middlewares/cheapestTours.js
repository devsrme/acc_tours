const cheapestTours = (req, res, next) => {
  req.query.sort = "price";
  req.query.limit = "3";
  next();
};

module.exports = cheapestTours;
