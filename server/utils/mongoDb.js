const mongoose = require("mongoose");

const clientoption = {
    userNewUrlParser: true,
    userCreateIndex: true,
    useUndifiedTopology: true,
    useFinfAndModify: false,
    autuIndex: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    sockerTimeoutMS: 30000,
    keepAlive: true
}

const mongoDbConection = (config) => {
    const db = mongoose.createConnection(config.MONGO_URL, clientoption)
    db.on("error", console.error.bind(console, "Mongo DB connection error"))
    db.once("open", function (){
        console.log("db connected")
    })
}

module.exports = {
    mongoDbConection
}

