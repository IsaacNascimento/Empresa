'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestePerguntaSchema extends Schema {
  up() {
    this.create('teste_perguntas', (table) => {
      table.increments()
      table.integer('pergunta_id').references('id').inTable('perguntas').unsigned().notNullable()
      table.integer('teste_seletivo_id').references('id').inTable('teste_seletivos').unsigned().notNullable()
      table.integer('candidato_id').references('id').inTable('candidatos').unsigned().notNullable()
      table.string('resposta', 1).notNullable()
      table.timestamps()
    })
  }
  
  down() {
    this.drop('teste_perguntas')
  }
}

module.exports = TestePerguntaSchema
