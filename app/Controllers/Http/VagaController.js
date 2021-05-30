'use strict'

const Vaga = use('App/models/Vaga')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with vagas
 */
class VagaController {
  /**
   * Show a list of all vagas.
   * GET vagas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Vaga.query().paginate(page, perPage);
  }


  /**
   * Create/save a new vaga.
   * POST vagas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
    const campos = Vaga.getCampoVaga() //requisição de uma variável em outro arquivo
    const vagas = request.only(campos) //chamando a variável em outra linha
    return await Vaga.create(vagas)
  }

  /**
   * Display a single vaga.
   * GET vagas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async show ({ params, request, response, view }) {
    return await Vaga.query()
                     .with('empresa')
                     .with('cargo')
                     .with('teste_seletivo')
                     .where('id', params.id)
                     .first();
  }

  /**
   * Update vaga details.
   * PUT or PATCH vagas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const vaga = await Vaga.findOrFail(params.id)

    const campos = Vaga.getCampoVaga()
    const dados = request.only(campos)

    vaga.merge(dados) 
    await vaga.save() 
    return vaga 
  }


  /**
   * Delete a vaga with id.
   * DELETE vagas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const vaga = await Vaga.findOrFail(params.id)
    return await vaga.delete();
  }
}

module.exports = VagaController
