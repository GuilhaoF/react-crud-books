
exports.seed = async function (knex) {
  return knex('livros').del()
    .then(function () {
      return knex('livros').insert([

        {
          titulo: "Web com Js e React",
          autor: 'Mauricio Samy Silva',
          ano: 2014,
          preco: 25.5,
          foto: 'https:s3.novatec.com.br/capas/9788575223925'
        }
      ])
    }
    )
};
