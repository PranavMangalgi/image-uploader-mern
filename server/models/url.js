const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    image: {
      data: Buffer,
      contentType: String,
    },
    shortUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("url", urlSchema);
