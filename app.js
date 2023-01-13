const cors = require("cors");
const express = require("express");
const app = express();

const rafflesController = require("./controllers/raffles")

// Middleware
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Welcome to my page");
  });


  app.use("/raffles", rafflesController)

  app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });


  module.exports = app;
