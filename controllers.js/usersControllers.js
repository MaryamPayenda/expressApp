const express = require("express");
const usersData = require("../model/usersModel");
// middleware
// adding new user to the collection

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

const getAllUsers = async (req, res) => {
  try {
    const users = await usersData.find();
    res.status(200).json(
      users.map((user) => {
        return {
          userId: user._id,
          userName: user.userName,
          userPass: user.userPass,
          age: user.age,
          fwd: user.fwd,
          toolStack: user.toolStack,
          email: user.email,
          userAddedDate: user.userAddedDate,
          request: {
            type: "GET",
            url: `http://localhost:5000/users/${user.userName}`,
          },
        };
      })
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllUsers,
  addNewUser,
};
