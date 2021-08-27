const express = require("express");
const router = express.Router();
const UsersData = require("../model/usersModel");
const {
  getAllUsers,
  addNewUser,
  deleteUser,
} = require("../controllers/usersControllers");

router.route("/").post(addNewUser);
router.route("/").get(getAllUsers);
router.route("/:id").delete(deleteUser);

module.exports = router;
