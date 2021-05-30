'use strict'

/*
|--------------------------------------------------------------------------
| CargoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Cargo = use('App/models/Cargo')

class CargoSeeder {
  async run() {
    await Cargo.createMany([
      {
        id: 1,
        nome: 'Humanas', 
        departamento_id: 1,
      },
      {
        id: 2,
        nome: 'Exatas',   
        departamento_id: 1,
      },
      {
        id: 3,
        nome: 'Exatas',   
        departamento_id: 1,
      },
      {
        id: 4,
        nome: 'Exatas',   
        departamento_id: 1,
      },
      {
        id: 5,
        nome: 'Exatas',   
        departamento_id: 1,
      },
    ])
  }
}

module.exports = CargoSeeder
