const express = require("express");

const app = express();
const cors = require("cors");

app.use(express.json())

// Route Imports
const userInfo = require("./routes/userRoute");

app.use("/api/v1", userInfo)
app.use(cors({
    origin: "*",
}))

module.exports = app