/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TodoSchema extends Schema {
  up() {
    this.create('todos', (table) => {
      table.increments();
      table.string('text', 254);
      table.timestamps();
    });
  }

  down() {
    this.drop('todos');
  }
}

module.exports = TodoSchema;
