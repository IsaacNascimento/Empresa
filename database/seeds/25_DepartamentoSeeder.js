'use strict'

/*
|--------------------------------------------------------------------------
| DepartamentoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Departamento = use('App/models/Departamento')

class DepartamentoSeeder {
  async run () {
    await Departamento.createMany([
      {
        id:1,
        nome: 'Recursos Humanos',
        sigla:'RH',
        ramal:'(61) 5555-5000',
      },
      {
        id:2,
        nome: 'Financeiro',
        sigla:'FI',
        ramal:'(61) 2222-2222',
      },
      {
        id:3,
        nome: 'Administrativo',
        sigla:'ADM',
        ramal:'(61) 3333-3333',
      },
      {
        id:4,
        nome: 'Comercial',
        sigla:'SC',
        ramal:'(61) 4444-4444',
      },
      {
        id:5,
        nome: 'Operacional',
        sigla:'SO',
        ramal:'(61) 5555-5555',
      },
    ])
  }
}

module.exports = DepartamentoSeeder
