const express = require("express");
require('dotenv').config();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3030;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const listRoutes = require("./routes/allRoute");
app.use('/', listRoutes);

app.listen(port, () => {
  console.log("Connected to port " + port);
});
