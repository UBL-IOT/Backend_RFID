const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  NO_KARTU: {
    type: Number,
  },
  ID_CARD: {
    type: String,
  },
  STATUS: {
    type: String,
  },
  Time: {
    type: String,
  },
});

module.exports = mongoose.model("data_kartu", UserSchema);
