const mongoose = require("mongoose");

// DEFINE SCHEMA

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "A tour must have a description"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
    trim: true,
  },
  duration: {
    type: Number,
    trim: true,
    required: [true, "A tour must have a duration"],
  },
  image: {
    type: String,
    required: [true, "A tour must have a image"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
});

// CREATE MODEL OR COLLECTION

const Tour = mongoose.model("Tour", tourSchema);

// EXPORTS MODEL

module.exports = Tour;
