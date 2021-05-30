'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VagaSchema extends Schema {
  up() {
    this.create('vagas', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.float('salario', 8.2)
      table.string('turno', 11).notNullable()
      table.string('carga_horaria', 45)
      table.integer('cargo_id').references('id').inTable('cargos').unsigned().notNullable()
      table.integer('empresa_id').references('id').inTable('empresas').unsigned().notNullable()
      table.integer('teste_seletivo_id').references('id').inTable('teste_seletivos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('vagas')
  }
}

module.exports = VagaSchema
