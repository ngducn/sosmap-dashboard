const express = require("express");
const ticketController = require("../controllers/ticket.controller");
const router = express.Router();

/**
 * @route GET api/ticket
 * @description Get all donation ticket
 * @access public
 */
router.get("/", ticketController.getAllTickets);

/**
 * @route GET api/ticket/:id
 * @description Get detail of single ticket
 * @access public
 */
router.get("/:id", ticketController.getSingleTicket);

/**
 * @route POST api/ticket
 * @description create a new ticket
 * @access login required
 */
router.post("/", ticketController.createTicket);

/**
 * @route DELETE api/ticket/:id
 * @description delete an existing ticket
 * @access login required and admin
 */
router.delete("/:id", ticketController.deleteTicket);

module.exports = router;
