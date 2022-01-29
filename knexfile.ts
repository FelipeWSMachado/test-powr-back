const path = require("path");

module.exports = {
  client: "mysql",
  connection: {
    host: "w3epjhex7h2ccjxx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    database: "gpflood37buouu2p",
    user: "g0p1zvdiwjj2obsg",
    password: "uto2ugqrtwdiiazx",
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  useNullAsDefault: true,
};
