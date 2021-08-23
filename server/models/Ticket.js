const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = Schema(
  {
    type: { type: String, enum: ["send", "receive"], require: true },
    // priority: { type: String },
    status: { type: String },
    ticketOwner: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    loc: {
      type: { type: String },
      coordinates: [Number],
    },
    note: { type: String },
    items: [{ type: Schema.Types.ObjectId, ref: "ItemBundle" }],
    // team: { type: Schema.Types.ObjectId, ref: "Team" },
  },
  { timestamp: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
