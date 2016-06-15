
exports.up = function(knex, Promise) {
  return knex.schema.createTable('park', function(table){
    table.increments();
    table.string('name')
    table.integer('year_founded')
    table.integer('state_id').unsigned().references('id').inTable('state')
    table.integer('size')
    table.string('img')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('park')
};
