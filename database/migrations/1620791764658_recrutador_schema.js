'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecrutadorSchema extends Schema {
  up() {
    this.create('recrutadores', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.bigInteger('cpf').notNullable()
      table.string('email', 100)
      table.bigInteger('telefone', 15).notNullable()
      table.integer('empresa_id').references('id').inTable('empresas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('recrutadores')
  }
}

module.exports = RecrutadorSchema
