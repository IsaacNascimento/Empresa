'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepartamentoSchema extends Schema {
  up() {
    this.create('departamentos', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.string('sigla', 20)
      table.bigInteger('ramal')
      table.timestamps()
    })
  }

  down() {
    this.drop('departamentos')
  }
}

module.exports = DepartamentoSchema
