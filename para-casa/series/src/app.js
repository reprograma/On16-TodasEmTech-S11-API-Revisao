const express = require("express");

const app = express();

app.use(express.json());

const seriesRoute = require("./router/routesSeries");

app.use("/reproflix", seriesRoute);

module.exports = app;
