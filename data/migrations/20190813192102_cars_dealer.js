
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments();
      table.integer('vin').unique().notNullable();
      table.string('make', 64).notNullable();
      table.string('model', 64).notNullable();
      table.integer('mileage').notNullable();
      table.string('transmissionType', 64).notNullable();
      table.string('titleStatus', 64).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('cars')
};
