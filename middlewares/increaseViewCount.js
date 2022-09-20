const Tour = require("./../models/tourModel");
const increaseViewCount = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Tour.findByIdAndUpdate(id, { $inc: { viewCount: 1 } }, { new: true });
    next();
  } catch (err) {
    res.status(400).send({
      status: "fail",
      messege: "Something went wrong",
    });
  }
};

module.exports = increaseViewCount;
