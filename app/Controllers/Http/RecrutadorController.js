'use strict'

const Recrutador = use('App/models/Recrutador')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with recrutadors
 */
class RecrutadorController {
  /**
   * Show a list of all recrutadors.
   * GET recrutadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Recrutador.query().paginate(page, perPage);
  }


  /**
   * Create/save a new recrutador.
   * POST recrutadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
    const campos = Recrutador.getCampoRecrutador() //requisição de uma variável em outro arquivo
    const recrutadors = request.only(campos) //chamando a variável em outra linha
    return await Recrutador.create(recrutadors)
  }

  /**
   * Display a single recrutador.
   * GET recrutadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async show ({ params, request, response, view }) {
    return await Recrutador.query()
                           .with('empresa')
                           .where('id', params.id)
                           .first();
  }

  /**
   * Update recrutador details.
   * PUT or PATCH recrutadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const recrutador = await Recrutador.findOrFail(params.id)

    const campos = Recrutador.getCampoRecrutador()
    const dados = request.only(campos)

    recrutador.merge(dados) 
    await recrutador.save() 
    return recrutador 
  }


  /**
   * Delete a recrutador with id.
   * DELETE recrutadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const recrutador = await Recrutador.findOrFail(params.id)
    return await recrutador.delete();
  }
}

module.exports = RecrutadorController

