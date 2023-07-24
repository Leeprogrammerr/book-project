const express = require("express");
const path = require("path");
const connectDB = require("../config/db");

const expressLayout = require("express-ejs-layouts");
const mainRouter = require("../routers/main.router");
const bookDetailRouter = require("../routers/bookDetail.router");
const bookRouter = require("../routers/book.router");

const app = express();

//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set template ejs
app.use(express.static("public"));
app.use(expressLayout);
app.set("layout", "layouts/main");
app.set("view engine", "ejs");
// connect mongodb
connectDB();

// routes middleware
app.use(mainRouter);
app.use(bookRouter);
app.use(bookDetailRouter);

module.exports = app;
