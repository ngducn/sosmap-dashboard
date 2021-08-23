const express = require("express");
const router = express.Router();

const mockRoute = require("./mock.route");
router.use("/mock", mockRoute);

const ticketRoute = require("./ticket.route");
router.use("/ticket", ticketRoute);

const teamRoute = require("./team.route");
router.use("/team", teamRoute);
