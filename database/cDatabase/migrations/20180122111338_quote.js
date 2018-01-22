

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('quote', (table) => {
      table.increments().primary
      table.text('body')
			table.text('attribution')
			table.text('category')
			table.boolean('featured')
			table.boolean('been_featured')
    })
  ])
}


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('quote')
  ])
};
