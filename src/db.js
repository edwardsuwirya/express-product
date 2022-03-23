const config = require("./config");
const {dbHost, dbPort, dbUser, dbName, dbPassword} = config()
const initOptions = {};
const pgp = require('pg-promise')(initOptions);
const cn = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
const db = pgp(cn)
module.exports = db

