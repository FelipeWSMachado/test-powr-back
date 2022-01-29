import knex from "knex";

export async function up(knex: knex) {
  return knex.schema.createTable("register", (table) => {
    table.increments("id").primary();
    table.text("items", "longtext").nullable();
  });
}
export async function down(knex: knex) {
  return knex.schema.dropTable("register");
}
