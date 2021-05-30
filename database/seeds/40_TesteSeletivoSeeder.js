'use strict'

/*
|--------------------------------------------------------------------------
| TesteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const TesteSeletivo = use('App/models/TesteSeletivo')

class TesteSeletivoSeeder {
  async run() {
    await TesteSeletivo.createMany([
      {
        id: 1,
        nome: 'Teste Exatas',
        teste_data: '20/05/21',
      },
      {
        id: 2,
        nome: 'Teste Humanas', 
        teste_data: '20/05/21', 
      },
    ])
  }
}

module.exports = TesteSeletivoSeeder
