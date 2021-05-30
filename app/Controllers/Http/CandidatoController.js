'use strict'

const Candidato = use('App/models/Candidato')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with candis
 */
class CandidatoController {
  /**
   * Show a list of all candis.
   * GET candis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Candidato.query().paginate(page, perPage);
  }


  /**
   * Create/save a new candi.
   * POST candis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
    const campos = Candidato.getCampoCandidato() //requisição de uma variável em outro arquivo
    const candis = request.only(campos) //chamando a variável em outra linha
    return await Candidato.create(candis)
  }

  /**
   * Display a single candi.
   * GET candis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async show ({ params, request, response, view }) {
    return await Candidato.query().with('teste_perguntas').where('id', params.id).first();
  }

  /**
   * Update candi details.
   * PUT or PATCH candis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const candi = await Candidato.findOrFail(params.id)

    const campos = Candidato.getCampoCandidato()
    const dados = request.only(campos)

    candi.merge(dados) 
    await candi.save() 
    return candi 
  }


  /**
   * Delete a candi with id.
   * DELETE candis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const candi = await Candidato.findOrFail(params.id)
    return await candi.delete();
  }
}

module.exports = CandidatoController
