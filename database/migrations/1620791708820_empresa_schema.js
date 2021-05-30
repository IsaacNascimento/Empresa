'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up() {
    this.create('empresas', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.bigInteger('cnpj', 14).notNullable()
      table.bigInteger('telefone', 15).notNullable()
      table.string('email', 99)
      table.timestamps()
    })
  }

  down() {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema
