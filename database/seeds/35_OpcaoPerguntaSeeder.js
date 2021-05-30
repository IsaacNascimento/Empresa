'use strict'

/*
|--------------------------------------------------------------------------
| OpcaoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const OpcaoPergunta = use('App/models/OpcaoPergunta')

class OpcaoPerguntaSeeder {
  async run () {
    await OpcaoPergunta.createMany([
      {
        id:1, 
        descricao: 'O pagamento do 13º salário deverá ser efetuado integralmente e impreterivelmente no mês de dezembro;',
        valor: 'A',
        pergunta_id: 1, 
      },
      {
        id:2, 
        descricao: 'O pagamento corresponde a 1/12 da remuneração devida em dezembro por mês de trabalho;',
        valor: 'D',
        pergunta_id: 1, 
      },
      {
        id:3, 
        descricao: 'Desenvolver o autogerenciamento das equipes.',
        valor: 'C',
        pergunta_id: 2, 
      },
      {
        id:4, 
        descricao: 'Fortalecer o poder das chefias.',
        valor: 'A',
        pergunta_id: 2, 
      },
      {
        id:5, 
        descricao: 'exercício financeiro.',
        valor: 'D',
        pergunta_id: 3, 
      },
      {
        id:6, 
        descricao: 'período contábil.',
        valor: 'E',
        pergunta_id: 3, 
      },
      {
        id:7, 
        descricao: 'Certa',
        valor: 'C',
        pergunta_id: 4, 
      },
      {
        id:8, 
        descricao: 'Errada',
        valor: 'E',
        pergunta_id: 4, 
      },
      {
        id:9, 
        descricao: 'imperatividade',
        valor: 'A',
        pergunta_id: 5, 
      },
      {
        id:10, 
        descricao: 'Exigibilidade.',
        valor: 'D',
        pergunta_id: 5, 
      },
      {
        id:11, 
        descricao: 'Leilão',
        valor: 'D',
        pergunta_id: 6, 
      },
      {
        id:12, 
        descricao: 'Concurso',
        valor: 'B',
        pergunta_id: 6, 
      },
      {
        id:13, 
        descricao: 'Racional.',
        valor: 'C',
        pergunta_id: 7, 
      },
      {
        id:14, 
        descricao: 'N.D.A.',
        valor: 'D',
        pergunta_id: 7, 
      },
      {
        id:15, 
        descricao: 'aposto',
        valor: 'C',
        pergunta_id: 8, 
      },
      {
        id:16, 
        descricao: 'vocativo',
        valor: 'A',
        pergunta_id: 8, 
      },
      {
        id:17, 
        descricao: '16h30min.',
        valor: 'D',
        pergunta_id: 9, 
      },
      {
        id:18, 
        descricao: '18h.',
        valor: 'C',
        pergunta_id: 9, 
      },
      {
        id:19, 
        descricao: 'pretérito perfeito do indicativo.',
        valor: 'C',
        pergunta_id: 10, 
      },
      {
        id:20, 
        descricao: 'presente do indicativo.',
        valor: 'A',
        pergunta_id: 10, 
      },
    ])
  }
}

module.exports = OpcaoPerguntaSeeder
