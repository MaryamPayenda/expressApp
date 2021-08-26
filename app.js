const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());

const mogoose = require("mongoose");
const DB_URL = process.env.DB_URL;

mogoose
  .connect("DB_URL", { useNewUrl: true })
  .then(console.log(` ${DB_URL} DB is connected`))
  .catch((err) => {
    console.log(`There was a problem ${err.message}`);
  });

// const users = require("./router/users");
// app.use("/users", users);

app.get("/", (req, res) => {
  res.status(200).send("Welocme to the User Authentication User");
});

module.exports = app;
