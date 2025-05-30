const express = require("express")
const cors = require("cors")
require('dotenv').config();

const app = express()

app.use(cors());


app.use(express.json())
app.use(express.urlencoded({extended:true}))


const potholeRouter = require("./routes/pothole.route.js")
app.use("/api/v1", potholeRouter)

// create a home route
app.get("/", (req, res) => {
    res.send("Welcome to the pothole reporting API")
});


module.exports = app