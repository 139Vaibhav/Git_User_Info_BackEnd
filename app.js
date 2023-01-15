const express = require("express");

const app = express();

app.use(express.json())

// Route Imports
const userInfo = require("./routes/userRoute");

app.use("/api/v1", userInfo)

module.exports = app