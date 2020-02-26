
exports.up = function(knex) {
    return knex.schema.createTable('users', function(users) {
        users.increments();

        users.string('username', 128).notNullable();
        users.text('password', 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
