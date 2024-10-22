const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

// define assets path
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// define view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const loginRouter = require("./routes/loginRouter");
app.use("/")



app.listen(PORT)