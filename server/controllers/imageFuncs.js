const URL = require("../models/url");
const shortid = require("shortid");

const handleUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided." });
    }
    console.log(req.file);
    console.log(req.file.buffer);
    const shortId = shortid();
    const newImg = await URL.create({
      image: {
        data: req.file.buffer.toString("base64"),
        contentType: req.file.mimetype,
      },
      shortUrl: shortId,
    });

    const str = `data:${newImg.image.contentType};base64,${newImg.image.data}`;
    const url = `http://localhost:4000/${shortId}`;

    res.status(201).send({ str, url });
  } catch (e) {
    res.json({ error: e.message });
  }
};

const handleUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    if(!req.params){
      res.status(404).json({error:" shortUrl has no value"})
    }
    const img = await URL.findOne({ shortUrl });
    const str = `data:${img.image.contentType};base64,${img.image.data}`;
    res.status(200).send(str);
  } catch (e) {
    res.json({ error: e.message });
  }
};

module.exports = { handleUpload, handleUrl };
