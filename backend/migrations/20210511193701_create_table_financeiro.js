exports.up = function (knex) {
  return knex.schema.createTable("financeiro", table => {
    table.increments("cod_conta").primary().notNull();
    table.string("tipo_conta").notNull();
    table.decimal("valor_titulo", 20).notNull();
    table.date("data_vencimento").notNull();
    table.date("data_pagamento");
    table.string("tipo_negocio").notNull();
    table.string("quant_parcelas").notNull();
    table.string("cod_pessoa", 50).references("cnpj_cpf").inTable("pessoas");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("financeiro");
};
