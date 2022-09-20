const trendingTurs = async (req, res, next) => {
  req.query.sort = "-viewCount";
  req.query.limit = "3";
  next();
};

module.exports = trendingTurs;
