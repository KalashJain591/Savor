const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  photolink: { type: String, required: false },
  name: { type: String, required: true },
  details: { type: String, required: true },
});

const Gallery = mongoose.model("gallery", gallerySchema);

module.exports = Gallery;