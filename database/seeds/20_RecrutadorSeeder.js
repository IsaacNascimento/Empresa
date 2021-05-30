'use strict'

/*
|--------------------------------------------------------------------------
| RecrutadorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Recrutador = use('App/models/Recrutador')

class RecrutadorSeeder {
  async run() {
    await Recrutador.createMany([
      {
        id: 1,
        nome: 'Leonardo',
        cpf: '066.489.365-30',
        email: 'leonardo254878@gmail.com',
        telefone: '(61)9456123654',
        empresa_id: 1,
      },
      {
        id: 2,
        nome: 'Leonardo',
        cpf: '011.489.365-10',
        email: 'Leonardo254878@gmail.com',
        telefone: '(61)9456123654',
        empresa_id: 2,
      },
      {
        id: 3,
        nome: 'Fernando',
        cpf: '033.254.789-30',
        email: 'Fernando254878@gmail.com',
        telefone: '(61)9564893214',
        empresa_id: 3,
      },
      {
        id: 4,
        nome: 'Maria',
        cpf: '044.546.542-40',
        email: 'Maria@gmail.com',
        telefone: '(61)9575486245',
        empresa_id: 4,
      },
      {
        id: 5,
        nome: 'Josefa',
        cpf: '055.564.123-50',
        email: 'Josefa@gmail.com',
        telefone: '(61)9912545846',
        empresa_id: 5,
      },
    ])
  }
}

module.exports = RecrutadorSeeder
