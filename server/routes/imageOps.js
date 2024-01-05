const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { handleUpload, handleUrl } = require("../controllers/imageFuncs");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/upload", upload.single("img"), handleUpload);

router.get("/:id", handleUrl);

module.exports = router;
