
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable().unique()
      tbl.integer('dish_id').unsigned().references('id').inTable('dishes').onDelete('CASCADE').onUpdate('CASCADE')
      tbl.string('instructions', 1000).notNullable()
      tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
};
