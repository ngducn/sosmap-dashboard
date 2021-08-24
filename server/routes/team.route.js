const express = require("express");
const teamController = require("../controllers/team.controller");
const router = express.Router();

/**
 * @route GET /team
 * @description Get all teams
 * @access public
 */
router.get("/", teamController.getAllTeams);

/**
 * @route GET /team/:id
 * @description Get detail of a single team
 * @access public
 */
router.get("/:id", teamController.getSingleTeam);

module.exports = router;
