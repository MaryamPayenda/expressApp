const express = require("express");
const usersData = require("../model/usersModel");

// ------ middlewares-------------------
// middleware to find one by name
const getUserByName = async (req, res, next) => {
  let userByName;
  try {
    userByName = await usersData.findOne({
      userName: req.params.userName,
    });

    if (userByName == null) {
      return res.status(404).json({ message: "User Not found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  res.users = userByName;
  next();
};

//  to get all users
const getAllUsers = async (req, res) => {
  try {
    let allUsers = await usersData.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// add new user
const addNewUser = async (req, res) => {
  const user = new usersData({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fwd: req.body.fwd,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//delete a user by id
const deleteUser = async (req, res) => {
  const id = req.params.id;
  await usersData.findByIdAndDelete(id);
  res.send("User deleted successfully!");
};

// Get one by name  http://localhost:5001/users/Maryam
const getOne = async (req, res) => {
  try {
    res.status(200).json(res.users);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// update user
const updateUser = async (res, req) => {};

// patch one one info in table in put will update the whole data in the table
// const updateUserInfo =
//   (getUserByID,
//   async (req, res) => {
//     try {
//       const userByID = await usersData.findByIdAndUpdate(req.params.userName, {
//         userName: req.body.userName || res.users,
//         userPass: req.body.userPass || res.users,
//         age: req.body.name || res.users,
//         fwd: req.bpdy.name || res.users,
//         toolStack: req.body.toolStack || res.users,
//         email: req.body.email || res.users,
//       });
//     } catch (err) {
//       res.status(err.status).json({ message: err.message });
//     }
//   });
module.exports = {
  getAllUsers,
  addNewUser,
  deleteUser,
  // updateUserInfo,
  getOne,
  getUserByName,
};
