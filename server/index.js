const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./connection");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const imageRoutes = require("./routes/imageOps");

// Routes
app.use("/", imageRoutes);

app.listen(port, () => {
  connectDB(process.env.MONGODB_URL)
    .then(() =>
      console.log(`server is running at http://localhost:${port}\nDB connected`)
    )
    .catch((err) => console.error(err));
});
