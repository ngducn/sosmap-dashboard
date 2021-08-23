const mongoose = require("mongoose");
const Ticket = require("./models/Ticket");
const Item = require("./models/Item");
const ItemBundle = require("./models/ItemBundle");
const Team = require("./models/Team");

// const db = require("./sosmap-data.json");

const generateData = async () => {
  try {
    let ticket = await Ticket.create({
      type: "receive",
      status: "done",
    });
    console.log("Created: ", ticket);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
};

module.exports = generateData;

// const itemBundles = await ticket.items.map(async (item) => {
//   await ItemBundle.create({
//     owner: ticket._id,
//     amount: item.amount,
//     item: item_ids[Math.floor(Math.random() * 3)],
//   });
// });

// Promise.all(
//   tickets.map(async (ticket, idx) => {
//     console.log(idx);
//     console.log(ticket);
//     let singleTicket = await Ticket.create(ticket);
//     console.log("Created: ", singleTicket.type);
//     return singleTicket;
//   })
// );

// const tickets = db.map((ticket) => {
//   return {
//     type: ticket.type,
//     priority: ticket.priority,
//     status: "done",
//     ticketOwner: ticket.name,
//     phoneNumber: ticket.phoneNumber,
//     address: ticket.address,
//     loc: ticket.loc,
//     note: ticket.note,
//     items: filler_itembundle,
//   };
// });
// console.log(tickets[0]);

// for (let i = 0; i < tickets.length; i++) {
//   try {
//     console.log(i);
//     let ticket = await Ticket.create(tickets[i]);
//     console.log("Created: ", ticket);
//   } catch (error) {
//     console.log(error);
//     return;
//   }
// }
