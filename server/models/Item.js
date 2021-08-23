const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = Schema({
  type: { type: String, require: true },
  name: { type: String, require: true },
  unit: { type: String },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
