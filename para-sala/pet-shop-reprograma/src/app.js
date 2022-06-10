const express = require("express");
const petsRouter = require("./router/petsRouter");

const app = express();

app.use(express.json());
app.use("/pets", petsRouter);

module.exports = app;
