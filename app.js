const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());

const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(console.log(` DB is connected`))
  .catch((err) => {
    console.log(`There was a problem ${err.message}`);
  });

const users = require("./router/users");
app.use("/users", users);

app.get("/", (req, res) => {
  res.status(200).send("Welocme it comes from root rout");
});

module.exports = app;
