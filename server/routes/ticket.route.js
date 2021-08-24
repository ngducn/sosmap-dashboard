const express = require("express");
const ticketController = require("../controllers/ticket.controller");
const router = express.Router();

/**
 * @route GET /tickets
 * @description Get all donation ticket
 * @access public
 */
router.get("/", ticketController.getAlltickets);

/**
 * @route GET /ticket/:id
 * @description Get detail of single ticket
 * @access public
 */
router.get("/:id", ticketController.getSingleticket);

/**
 * @route POST /ticket
 * @description create a new ticket
 * @access login required
 */
router.post("/", ticketController.createticket);

/**
 * @route DELETE /ticket/:id
 * @description delete an existing ticket
 * @access login required and admin
 */
router.delete("/:id", ticketController.deleteticket);

module.exports = router;
