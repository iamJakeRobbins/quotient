exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('interpretation', (table) => {
      table.increments().primary
      table.integer('quote_id').references('quote.id')
      table.integer('user_id').references('user.id')
			table.text('body')


    })
  ])
}


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('interpretation')
  ])
};
