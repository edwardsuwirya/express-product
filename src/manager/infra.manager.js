const InfraManager = (config) => {
    const initDb = () => {
        const {dbHost, dbPort, dbUser, dbName, dbPassword} = config()
        const initOptions = {};
        const pgp = require('pg-promise')(initOptions);
        const cn = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
        return pgp(cn)
    }

    return {
        initDb
    }
}
module.exports = InfraManager
