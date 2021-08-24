const express = require("express");
const router = express.Router();

const ticketRoute = require("./ticket.route");
router.use("/ticket", ticketRoute);

const teamRoute = require("./team.route");
router.use("/team", teamRoute);

module.exports = router;
