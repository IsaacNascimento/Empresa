'use strict'

const TesteSeletivo = use('App/models/TesteSeletivo')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with testeSeletivos
 */
class TesteSeletivoController {
  /**
   * Show a list of all testeSeletivos.
   * GET testeSeletivos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return TesteSeletivo.query().paginate(page, perPage);
  }


  /**
   * Create/save a new testeSeletivo.
   * POST testeSeletivos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
    const campos = TesteSeletivo.getCampoTesteSeletivo() //requisição de uma variável em outro arquivo
    const testeSeletivos = request.only(campos) //chamando a variável em outra linha
    return await TesteSeletivo.create(testeSeletivos)
  }

  /**
   * Display a single testeSeletivo.
   * GET testeSeletivos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async show ({ params, request, response, view }) {
    return await TesteSeletivo.query()
                              .with('vagas')
                              .with('perguntas')
                              .where('id', params.id)
                              .first();
  }

  /**
   * Update testeSeletivo details.
   * PUT or PATCH testeSeletivos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const testeSeletivo = await TesteSeletivo.findOrFail(params.id)

    const campos = TesteSeletivo.getCampoTesteSeletivo()
    const dados = request.only(campos)

    testeSeletivo.merge(dados) 
    await testeSeletivo.save() 
    return testeSeletivo 
  }


  /**
   * Delete a testeSeletivo with id.
   * DELETE testeSeletivos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const testeSeletivo = await TesteSeletivo.findOrFail(params.id)
    return await testeSeletivo.delete();
  }
}

module.exports = TesteSeletivoController
