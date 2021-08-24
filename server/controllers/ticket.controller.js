const utilsHelper = require("../helpers/utils.helper");
const Tickets = require("../models/Ticket");
const ticketController = {};

ticketController.getAllTickets = async (req, res, next) => {
  try {
    let page = req.query.page;
    let limit = req.query.limit;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const totalTickets = await Tickets.countDocuments();
    const totalPages = Math.ceil(totalTickets / limit);
    const offset = limit * (page - 1);

    const tickets = await Tickets.find()
      .populate({
        path: "items",
        populate: {
          path: "item",
        },
      })
      .skip(offset)
      .limit(limit)
      .sort({ createdAt: "desc" });

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { tickets, totalPages },
      null,
      "Get all tickets successfully."
    );
  } catch (error) {
    next(error);
  }
};

ticketController.getSingleTicket = async (req, res, next) => {
  try {
    const { id } = req.params;
    let ticket = await Tickets.findById(id).populate("receiver");
    if (!ticket) return next(new Error("401 - Ticket does not exist."));

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { ticket },
      null,
      "Get single ticket successfully."
    );
  } catch (error) {
    next(error);
  }
};

ticketController.createTicket = async (req, res, next) => {
  try {
    let {
      receiveAmount,
      startLoc: { city },
      bankInfo,
      description,
      images,
    } = req.body;

    let ticket = await Tickets.create({
      images,
      bankInfo,
      receiveAmount,
      description,
      startLoc: {
        city,
      },
    });
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { ticket },
      null,
      "Created new donation ticket successfully."
    );
  } catch (error) {
    next(error);
  }
};

ticketController.updateTicket = async (req, res, next) => {
  try {
    let { id } = req.body;
    let { received } = req.body;
    let ticketById = await Tickets.findById({ _id: id });
    console.log(id, received);
    const remaining = ticketById.amount_remaining - received / ticketById.need;
    const isWaiting = remaining <= 0 ? false : true;
    console.log(remaining, isWaiting);

    let ticket = await Tickets.findByIdAndUpdate(id, {
      amount_remaining: remaining,
      isWaiting: isWaiting,
    });
    console.log(ticket);
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { ticket },
      null,
      "Updated successfully."
    );
  } catch (error) {
    next(error);
  }
};

ticketController.deleteTicket = async (req, res, next) => {
  try {
    let ticketId = req.params.id;
    await Tickets.findByIdAndDelete(ticketId);
    utilsHelper.sendResponse(
      res,
      200,
      true,
      null,
      null,
      "Deleted successfully."
    );
  } catch (error) {
    next(error);
  }
};

module.exports = ticketController;
