const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  description: String,
  image: { data: Buffer, contentType: String },
});

const Image = mongoose.model("Image", imageSchema);

export default Image;
