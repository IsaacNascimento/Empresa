'use strict'

/*
|--------------------------------------------------------------------------
| PerguntaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Pergunta = use('App/models/Pergunta')

class PerguntaSeeder {
  async run() {
    await Pergunta.createMany([
      {
        id: 1,
        nome: 'Questão 1', 
        tipo: 'Humanas',
        descricao: 'Com relação a Lei nº 4.090-62, complementada pela Lei nº 4.749-65, que dispõe sobre o 13º salário, é incorreto afirmar que:', 
        gabarito: '',
        departamento_id: 1,
      },
      {
        id: 2, 
        nome: 'Questão 2',
        tipo: 'Humanas',
        descricao: 'Uma das tendências atuais no campo da gestão de pessoas é a de se investir em processos de empoderamento (empowerment.). Sobre o principal objetivo desse processo, assinale a alternativa correta:',
        gabarito: '',
        departamento_id: 1,
      },
      {
        id: 3,
        nome: 'Questão 3',
        tipo: 'Exatas',
        descricao: 'De acordo com o princípio orçamentário da periodicidade, o período de tempo ao qual se referem a previsão das receitas e a fixação das despesas é denominado de:',
        gabarito: '',
        departamento_id: 2,
      },
      {
        id: 4,
        nome: 'Questão 4',
        tipo: 'Exatas',
        descricao: 'Referente ao orçamento público. É possível a reabertura, no exercício subsequente, de crédito especial aberto em novembro e não totalmente executado no exercício de abertura.',
        gabarito: '',
        departamento_id: 2,
      },
      {
        id: 5,
        nome: 'Questão 5',
        tipo: 'Humanas',
        descricao: 'O atributo que autoriza o Poder Público a editar atos administrativos obrigacionais que interferem na esfera jurídica dos administrados, independentemente da respectiva aquiescência, denomina-se:',
        gabarito: '',
        departamento_id: 3,
      },
      { 
        id: 6,
        nome: 'Questão 6',
        tipo: 'Humanas',
        descricao: 'A Administração Pública, objetivando vender produtos legalmente apreendidos, deverá realizar procedimento licitatório sob a modalidade de:',
        gabarito: '',
        departamento_id: 3,
      },
      {
        id: 7,
        nome: 'Questão 7',
        tipo: 'Exatas',
        descricao: 'O triplo do dobro de um número menos três é igual a menos o dobro desse mesmo número menos 6. Esse número é:',
        gabarito: '',
        departamento_id: 4,
      },
      {
      
        id: 8,
        nome: 'Questão 8',
        tipo: 'Humanas',
        descricao: 'Na frase “Adicione os temperos a gosto, orégano, salsa, pimenta vermelha...”, a função sintática do termo destacado é:',
        gabarito: '',
        departamento_id: 4,
      },
      {
        id: 9,
        nome: 'Questão 9',
        tipo: 'Exatas',
        descricao: 'Na Copa do Mundo realizada no Brasil, a transmissão de um jogo durou 2 horas. Se a partida começou às 15h30min, que horas terminou?',
        gabarito: '',
        departamento_id: 5,
      },
      {
      
        id: 10,
        nome: 'Questão 10',
        tipo: 'Humanas',
        descricao: 'Em “[...] – como ninguém pensou nisso antes?”, o verbo destacado está flexionado no',
        gabarito: '',
        departamento_id: 5,
      },
    ])
  }
}

module.exports = PerguntaSeeder
