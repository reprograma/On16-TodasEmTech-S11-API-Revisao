const express = require("express");

const petsRoutes = require("./router/petsRouter");

const app = express();

app.use(express.json());

app.use("/pets", petsRoutes);

module.exports = app;
