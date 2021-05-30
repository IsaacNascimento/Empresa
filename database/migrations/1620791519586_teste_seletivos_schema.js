'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TesteSeletivoSchema extends Schema {
  up() {
    this.create('teste_seletivos', (table) => {
      table.increments()
      table.string('nome', 30).notNullable()
      table.date('teste_data').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('teste_seletivos')
  }
}

module.exports = TesteSeletivoSchema
