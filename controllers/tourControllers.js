const Tour = require("./../models/tourModel");
const APIFeatoures = require("./../utils/apiFeatures");

// ---------------POST / CREATE NEW TOUR------------------

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    // SEND RESPONSE
    res.status(201).send({
      status: "create success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).send({
      status: "fail",
      messege: "Something went wrong",
    });
  }
};

// ----------------GET ALL TOURS---------------

exports.getAllTours = async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatoures(Tour.find(), req.query)
      .filter()
      .sort()
      .sortFields()
      .paginate();

    const tours = await features.query;

    // SEND RESPONSE
    res.status(200).send({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).send({
      status: "fail",
      messege: "Something went wrong",
    });
  }
};

// ------------------ GET SINGLE TOUR----------------

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    // SEND RESPONSE
    res.status(200).send({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).send({
      status: "fail",
      messege: "not found",
    });
  }
};

// ------------------ UPDATE TOUR--------------------------

exports.updateTour = async (req, res) => {
  try {
    const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runvalidators: true,
    });

    // SEND RESPONSE
    res.status(200).send({
      status: "update success",
      data: {
        updateTour,
      },
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      messege: "invailed input",
    });
  }
};
