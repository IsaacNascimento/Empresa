'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CandidatoSchema extends Schema {
  up() {
    this.create('candidatos', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.bigInteger('cpf').notNullable()
      table.string('email', 100).notNullable()
      table.string('telefone', 9)
      table.integer('carteira_trabalho', 7).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('candidatos')
  }
}

module.exports = CandidatoSchema
