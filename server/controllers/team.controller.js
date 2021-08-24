const utilsHelper = require("../helpers/utils.helper");
const Teams = require("../models/Team.model");
const teamController = {};

teamController.getAllTeams = async (req, res, next) => {
  try {
    let page = req.query.page;
    let limit = req.query.limit;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const totalTeams = await Teams.countDocuments();
    const totalPages = Math.ceil(totalTeams / limit);
    const offset = limit * (page - 1);

    const teams = await Teams.find()
      .skip(offset)
      .limit(limit)
      .sort({ createdAt: "desc" });

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { teams, totalPages },
      null,
      "Get all teams successfully."
    );
  } catch (error) {
    next(error);
  }
};

teamController.getSingleTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    let team = await Teams.findById(id).populate("receiver");
    if (!team) return next(new Error("401 - Team does not exist."));

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { team },
      null,
      "Get single team successfully."
    );
  } catch (error) {
    next(error);
  }
};

module.exports = teamController;
