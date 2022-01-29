import knex from "knex";

const db = knex({
  client: "mysql",
  connection: {
    host: "w3epjhex7h2ccjxx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    database: "gpflood37buouu2p",
    user: "g0p1zvdiwjj2obsg",
    password: "uto2ugqrtwdiiazx",
  },
  useNullAsDefault: true,
});

export const testConnection = async () => {
  return await db
    .raw("select 1+1 as result")
    .then(() => {
      console.log("🍕 Successfully connected with database!");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default db;
