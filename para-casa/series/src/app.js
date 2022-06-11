const express = require("express");

const seriesRouter = require("./router/seriesRouter");

const app = express();

app.use(express.json());

app.use("/series", seriesRouter);


module.exports = app;