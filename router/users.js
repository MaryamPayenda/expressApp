const express = require("express");
const router = express.Router();
const UsersData = require("../model/usersModel");
const {
  getAllUsers,
  addNewUser,
} = require("../controllers.js/usersControllers");
router.route("/").post(addNewUser);
