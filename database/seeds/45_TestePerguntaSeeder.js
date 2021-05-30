'use strict'

/*
|--------------------------------------------------------------------------
| TestePerguntaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const TestePergunta = use('App/models/TestePergunta')

class TestePerguntaSeeder {
  async run () {
    await TestePergunta.createMany([
      {
        id: 1,
        pergunta_id: 1,
        teste_seletivo_id: 1,
        candidato_id: 1,
        resposta: 'A',
      },
      {
        id: 2,
        pergunta_id: 2,
        teste_seletivo_id: 2,
        candidato_id: 2,
        resposta: 'C',
      },

      {
        id: 3,
        pergunta_id: 3,
        teste_seletivo_id: 1,
        candidato_id: 3,
        resposta: 'A',
      },

      {
        id: 4,
        pergunta_id: 4,
        teste_seletivo_id: 2,
        candidato_id: 4,
        resposta: 'D',
      },

      {
        id: 5,
        pergunta_id: 9,
        teste_seletivo_id: 1,
        candidato_id: 5,
        resposta: 'C',
      },
    ])
  }
}

module.exports = TestePerguntaSeeder
