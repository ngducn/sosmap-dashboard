const mongoose = require("mongoose");
const Ticket = require("./models/Ticket");
const Item = require("./models/Item");
const ItemBundle = require("./models/ItemBundle");
const Team = require("./models/Team");

const db_raw = require("./sosmap-data.json");
const db = db_raw.filter((e) => e.team._id == "6110fe2bf743e01e61caefc9");

const status_mock = ["done", "pending", "not-done"];

const generateData = async () => {
  const tickets = db.map((ticket) => {
    return {
      _id: ticket._id,
      type: ticket.type,
      priority: ticket.priority,
      status: status_mock[Math.floor(Math.random() * 3)],
      ticketOwner: ticket.name,
      phoneNumber: ticket.phoneNumber,
      address: ticket.address,
      loc: ticket.loc,
      note: ticket.note,
      items: ticket.items,
    };
  });

  try {
    for (let i = 0; i < tickets.length; i++) {
      let items_id = await Promise.all(
        tickets[i]?.items?.map(async (item) => {
          let bundle = await ItemBundle.create({
            owner: tickets[i]._id,
            amount: item.amount,
            item: "6110fe2bf743e01e61caefc9",
          });
          await bundle.save();
          // console.log("bundle", bundle);
          return bundle._id;
        })
      );
      let ticket = await Ticket.create({ ...tickets[i], items: items_id });
      console.log("Created: ", ticket);
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

const main = () => {
  mongoose
    .connect("mongodb://localhost:27017/sosmap", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected.");
      generateData();
      console.log("Generated done!");
    })
    .catch((err) => console.log(err.message));
};

main();
