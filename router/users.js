const express = require("express");
const router = express.Router();
const UsersData = require("../model/usersModel");
const {
  getAllUsers,
  addNewUser,
  getUserByName,

  // deleteUser,
  getOne,
  updateUserInfo,
} = require("../controllers/usersControllers");

router.route("/").post(addNewUser);
router.route("/").get(getAllUsers);
// router.route("/:id").delete(deleteUser);
router.route("/:userName").get(getUserByName, getOne);

module.exports = router;
