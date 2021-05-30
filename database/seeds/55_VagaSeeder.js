'use strict'

/*
|--------------------------------------------------------------------------
| VagaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Vaga = use('App/models/Vaga')

class VagaSeeder {
  async run() {
    await Vaga.createMany([
      {
        id: 1,
        nome: 'Operador de caixa',
        salario: '2850',
        turno: 'Noturno',
        carga_horaria: '10hrs',
        cargo_id: 2,
        empresa_id: 3,
        teste_seletivo_id: 1,
      },
      {
        id: 2,
        nome: 'Auxiliar Administrativo',
        salario: '2500',
        turno: 'Matutino',
        carga_horaria: '8hrs',
        cargo_id: 1,
        empresa_id: 1,
        teste_seletivo_id: 2,
      },

      {
        id: 3,
        nome: 'Analista De Gestão',
        salario: '2500',
        turno: 'Vespertino',
        carga_horaria: '8hrs',
        cargo_id: 1,
        empresa_id: 2,
        teste_seletivo_id: 2,
      },

      {
        id: 4,
        nome: 'Analista de Sistemas Pleno',
        salario: '3000',
        turno: 'Noturno',
        carga_horaria: '8hrs',
        cargo_id: 2,
        empresa_id: 4,
        teste_seletivo_id: 1,
      },

      {
        id: 5,
        nome: 'TI',
        salario: '3000',
        turno: 'Matutino',
        carga_horaria: '8hrs',
        cargo_id: 2,
        empresa_id: 5,
        teste_seletivo_id: 1,
      },
    ])
  }
}

module.exports = VagaSeeder
