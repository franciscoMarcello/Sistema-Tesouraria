exports.up = function (knex) {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.string("nome", 40).notNull();
    table.string("senha", 20).notNull();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
