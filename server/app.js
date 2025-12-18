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
app.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml");

  const baseUrl = "https://socialstech.com";
  const today = new Date().toISOString().split("T")[0];

  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

</urlset>`);
});

// Routers definitions files
// const usersRouter = require("./routes/v1api/user");
const contactsUsRouter = require("./routes/v1api/contact");



//Routers
// app.use("/api/v1/users", usersRouter);
app.use("/api/v1", contactsUsRouter);

module.exports = app;
