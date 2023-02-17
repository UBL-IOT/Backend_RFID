const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const mongoURL = "mongodb://0.0.0.0:27017/rfid";

mongoose
  .connect(mongoURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Berhasil Konek ke database");
  })
  .catch(() => {
    console.log("Gagal konek");
  });

const directory = path.join(__dirname, "/statics/");
app.use(express.static(directory));
app.use(cors());

app.use(
  bodyParser.json({
    extended: true,
    limit: "20mb",
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "20mb",
  })
);

//routes
app.use("/user", require("./routes/User"));
app.use("/card", require("./routes/Card"));

app.listen(5000, () => {
  console.log("Server telah dijalankan");
});
