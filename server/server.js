const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port: ${PORT}`);
});
