
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('critique', (table) => {
      table.increments().primary
      table.integer('user_id').references('user.id')
      table.integer('interpretation_id').references('interpretation.id')
			table.integer('quote_id').references('quote.id')
			table.text('body')


    })
  ])
}


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('critique')
  ])
};
