exports.up = function (knex) {
  return knex.schema.createTable("pessoas", table => {
    table.increments("id").primary();
    table.string("tipo_pessoa", 20).notNull();
    table.string("nome", 150).notNull();
    table.string("bairro", 50).notNull();
    table.string("cnpj_cpf", 30).notNull().unique();
    table.integer("numero", 20).notNull();
    table.string("cep", 20).notNull();
    table.string("contato", 20).notNull().unique();
    table.string("email", 150).notNull().unique();
    table.string("dataDeCadastro").notNull();
    table.string("tipo_cliente").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pessoas");
};
