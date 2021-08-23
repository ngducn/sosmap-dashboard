const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemBundleSchema = Schema({
  owner: { type: Schema.Types.ObjectId, ref: "Ticket" },
  amount: { type: Number },
  item: { type: Schema.Types.ObjectId, ref: "Item" },
});

const ItemBundle = mongoose.model("ItemBundle", itemBundleSchema);
module.exports = ItemBundle;
