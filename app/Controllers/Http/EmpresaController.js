'use strict'

const Empresa = use('App/models/Empresa')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with empresas
 */
class EmpresaController {
  /**
   * Show a list of all empresas.
   * GET empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Empresa.query().paginate(page, perPage);
  }


  /**
   * Create/save a new empresa.
   * POST empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
    const campos = Empresa.getCampoEmpresa() //requisição de uma variável em outro arquivo
    const empresas = request.only(campos) //chamando a variável em outra linha
    return await Empresa.create(empresas)
  }

  /**
   * Display a single empresa.
   * GET empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async show ({ params, request, response, view }) {
    return await Empresa.query()
                        .with('vagas')
                        .with('recrutadores')
                        .where('id', params.id)
                        .first();
  }

  /**
   * Update empresa details.
   * PUT or PATCH empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const empresa = await Empresa.findOrFail(params.id)

    const campos = Empresa.getCampoEmpresa()
    const dados = request.only(campos)

    empresa.merge(dados) 
    await empresa.save() 
    return empresa 
  }


  /**
   * Delete a empresa with id.
   * DELETE empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const empresa = await Empresa.findOrFail(params.id)
    return await empresa.delete();
  }
}

module.exports = EmpresaController
