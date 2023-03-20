"use strict";

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

app.get("/", (req, res) => res.send("Hello World"));

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
