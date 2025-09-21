const {Client} = require("pg")
  console.log("HELOO",process.env.POSTGRES_USER)
const postgresDbExternal = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,  
    database: process.env.POSTGRES_DATABASE, 
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT
  });

  module.exports = postgresDbExternal;