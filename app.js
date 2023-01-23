const express = require("express");

const app = express();

app.use(express.json())

// Route Imports
const userInfo = require("./routes/userRoute");

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api/v1", userInfo)


module.exports = app