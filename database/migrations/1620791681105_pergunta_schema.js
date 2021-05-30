'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerguntaSchema extends Schema {
  up() {
    this.create('perguntas', (table) => {
      table.increments()
      table.string('nome', 30)
      table.string('tipo', 30)
      table.string('descricao', 299).notNullable()
      table.string('gabarito', 1).notNullable()
      table.integer('departamento_id').references('id').inTable('departamentos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('perguntas')
  }
}

module.exports = PerguntaSchema
