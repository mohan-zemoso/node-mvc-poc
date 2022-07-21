const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const adminData = require("./routes/admin");
const homePageRoutes = require("./routes/homepage");

const errorController = require("./controllers/error");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);
app.use(homePageRoutes);

app.use(errorController.getErrorPage);

const server = http.createServer(app);

server.listen(3000);
