const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = Schema({});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
