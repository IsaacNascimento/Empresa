'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OpcaoPerguntaSchema extends Schema {
  up() {
    this.create('opcao_perguntas', (table) => {
      table.increments()
      table.string('descricao', 30).notNullable()
      table.string('valor', 1).notNullable()
      table.integer('pergunta_id').references('id').inTable('perguntas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('opcao_perguntas')
  }
}

module.exports = OpcaoPerguntaSchema
