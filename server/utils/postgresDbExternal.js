const { Client } = require("pg");
require('dotenv').config();

const postgresDbExternal = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});

postgresDbExternal.connect()
  .then(() => console.log("Connected to Render Postgres!"))
  .catch(err => console.error("Connection Error:", err));
