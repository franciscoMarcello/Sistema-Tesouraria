exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          nome: "admin",

          senha: "123456",
        },
        {
          id: 2,
          nome: "admin",

          senha: "123456",
        },
        {
          id: 3,
          nome: "Joaozinho",

          senha: "123456",
        },
      ]);
    });
};
