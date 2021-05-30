"use strict";

/*
|--------------------------------------------------------------------------
| EmpresaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

const Empresa = use("App/models/Empresa");

class EmpresaSeeder {
  async run() {
    await Empresa.createMany([
      {
        id: 1,
        nome: "Infraero",
        cnpj: "32.066.489.365",
        telefone: "(61)9812345678",
        email: "Infraero@gmail.com",
      },
      { 
        id: 2,
        nome: "Casa da Moeda",
        cnpj: "61.584.024.478",
        telefone: "(61)984752164",
        email: "Casadamoeda@gmail.com",
      },
      {
        id: 3,
        nome: "Walmart",
        cnpj: "58.145.487.012",
        telefone: "(61)984612795",
        email: "Walmart@gmail.com",
      },
      {
        id: 4,
        nome: "Embraer",
        cnpj: "87.369.147.852",
        telefone: "(61)978436144",
        email: "Embraer@gmail.com",
      },
      {  
        id: 5,
        nome: "Google",
        cnpj: "25.154.254.456",
        telefone: "(61)988654219",
        email: "Google@gmail.com",
      },
    ]);
  }
}

module.exports = EmpresaSeeder;
