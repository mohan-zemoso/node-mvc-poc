const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const homePageRoutes = require("./routes/homepage");
const errorController = require("./controllers/error");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(homePageRoutes);
app.use(errorController.getErrorPage);

const server = http.createServer(app);
server.listen(3000);
