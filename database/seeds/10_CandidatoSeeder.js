'use strict'

/*
|--------------------------------------------------------------------------
| CandidatoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Candidato = use('App/models/Candidato')

class CandidatoSeeder {
  async run() {
    await Candidato.createMany([
      {
        id: 1,
        nome: 'Luana',
        cpf: '054.478.365.60',
        email: 'luanaalves254878@gmail.com',
        telefone: '945612578',
        carteira_trabalho: '1111111',
      },
      {
        id: 2,
        nome: 'João',
        cpf: '012.400.300.30',
        email: 'João254878@gmail.com',
        telefone: '1234578965',
        carteira_trabalho: '2222222',
      },
      {
        id: 3,
        nome: 'Isaac',
        cpf: '011.500.400.50',
        email: 'Isaac254878@gmail.com',
        telefone: '951357845',
        carteira_trabalho: '3333333',
      },
      {
        id: 4,
        nome: 'Maycon',
        cpf: '023.601.402.70',
        email: 'Maycon254878@gmail.com',
        telefone: '123658459',
        carteira_trabalho: '4444444',
      },
      {
        id: 5,
        nome: 'Cleber',
        cpf: '055.605.502.75',
        email: 'Cleber254878@gmail.com',
        telefone: '369852147',
        carteira_trabalho: '5555555',
      }
    ])
  }
}

module.exports = CandidatoSeeder
