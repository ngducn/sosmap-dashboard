const mongoose = require("mongoose");
const Ticket = require("../models/Ticket");
const Item = require("../models/Item");
const ItemBundle = require("../models/ItemBundle");
const Team = require("../models/Team");

const db_raw = require("./sosmap-data.json");
const db = db_raw.filter((e) => e.team._id == "6110fe2bf743e01e61caefc9");

const generateItems = async () => {
  const items = [
    { type: "necessities", name: "mi-goi", unit: "thùng" },
    { type: "necessities", name: "gao", unit: "kg" },
    { type: "necessities", name: "sua", unit: "l" },
    { type: "necessities", name: "rau-cu-qua", unit: "kg" },
    { type: "necessities", name: "khau-trang", unit: "hộp" },
  ];

  try {
    for (let i = 0; i < items.length; i++) {
      let item = await Item.create(items[i]);
      console.log("Created: ", item);
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

const generateTickets = async () => {
  const status_mock = ["done", "pending", "not-done"];
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
          let individualItem = await Item.find({ name: item?.item?.slug });
          let bundle = await ItemBundle.create({
            owner: tickets[i]._id,
            amount: item.amount,
            item: individualItem[0]?._id,
          });
          await bundle.save();
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
      generateItems();
      generateTickets();
      console.log("Generated!");
    })
    .catch((err) => console.log(err.message));
};

main();
