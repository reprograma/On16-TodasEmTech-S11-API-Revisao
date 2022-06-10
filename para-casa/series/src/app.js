const express = require("express");

const app = express();

app.use(express.json());

const seriesRoute = require("./router/routesSeries");

app.use("/reprogramaflix", seriesRoute);

module.exports = app;
