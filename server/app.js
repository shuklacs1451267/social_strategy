const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cron = require("node-cron")
const postgresDbExternal = require("./utils/postgresDbExternal")

// Setup a global variable to resolve application dir path
global.appDir = path.join(__dirname);
 
// Setup environment variable
if (process.env.NODE_ENV === "production") {
  require("dotenv").config({ path: path.join(global.appDir, ".env") });
} else {
  require("dotenv").config({
    path: path.join(global.appDir, ".env"),
  });
}

var app = express();

app.use('/images', express.static('./images'));
app.get("/", (req, res) => {
  res.json({ servicename: "first app module" });
});
app.use(cors()) // enable cors
  .use(bodyParser.json({ limit: "2mb" }))
  .use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: false,
      parameterLimit: 5000,
    })
  );
  console.log("ready")

// database connection

postgresDbExternal.connect((err) => {
  if (err) {
     return console.error("error", err)
   } else {
     console.log("connection stablish")
   }
 })

// Routers definitions files
// const usersRouter = require("./routes/v1api/user");
const contactsUsRouter = require("./routes/v1api/contact");



//Routers
// app.use("/api/v1/users", usersRouter);
app.use("/api/v1", contactsUsRouter);

module.exports = app;
