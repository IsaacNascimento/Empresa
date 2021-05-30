'use strict'

const TestePergunta = use('App/models/TestePergunta')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with testePerguntas
 */
class TestePerguntaController {
  /**
   * Show a list of all testePerguntas.
   * GET testePerguntas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return TestePergunta.query().paginate(page, perPage);
  }


  /**
   * Create/save a new testePergunta.
   * POST testePerguntas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
    const campos = TestePergunta.getCampoTestePergunta() //requisição de uma variável em outro arquivo
    const testePerguntas = request.only(campos) //chamando a variável em outra linha
    return await TestePergunta.create(testePerguntas)
  }

  /**
   * Display a single testePergunta.
   * GET testePerguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async show ({ params, request, response, view }) {
    return await TestePergunta.query()
                              .with('candidatos')
                              .with('pergunta')
                              .with('teste_seletivo')
                              .where('id', params.id)
                              .first();
  }

  /**
   * Update testePergunta details.
   * PUT or PATCH testePerguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const testePergunta = await TestePergunta.findOrFail(params.id)

    const campos = TestePergunta.getCampoTestePergunta()
    const dados = request.only(campos)

    testePergunta.merge(dados) 
    await testePergunta.save() 
    return testePergunta 
  }


  /**
   * Delete a testePergunta with id.
   * DELETE testePerguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const testePergunta = await TestePergunta.findOrFail(params.id)
    return await testePergunta.delete();
  }
}

module.exports = TestePerguntaController
