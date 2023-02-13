const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  instaLink: {
    type: String,
    trim: true,
  },
  ytLink: {
    type: String,
    trim: true,
  },
  instaCost: {
    type: String,
    trim: true,
  },
  ytCost: {
    type: String,
    trim: true,
  },
  contact: {
    type: String,
    trim: true,
  },
  mail: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  Gender: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("User", userSchema);
