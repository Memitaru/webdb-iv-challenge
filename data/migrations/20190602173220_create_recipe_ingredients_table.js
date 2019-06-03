
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', tbl => {
    tbl.increments();
    tbl.integer('recipe_id').notNullable().unsigned().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE');
    tbl.integer('ingredient_id').notNullable().unsigned().references('id').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE')
    tbl.float('quantity', 10).notNullable()
    tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
};
