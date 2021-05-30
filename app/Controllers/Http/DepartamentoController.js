'use strict'

const Departamento = use('App/models/Departamento')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with departamentos
 */
class DepartamentoController {
  /**
   * Show a list of all departamentos.
   * GET departamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Departamento.query().paginate(page, perPage);
  }


  /**
   * Create/save a new departamento.
   * POST departamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
    const campos = Departamento.getCampoDepartamento() //requisição de uma variável em outro arquivo
    const departamentos = request.only(campos) //chamando a variável em outra linha
    return await Departamento.create(departamentos)
  }

  /**
   * Display a single departamento.
   * GET departamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async show ({ params, request, response, view }) {
    return await Departamento.query()
                             .with('cargos')
                             .with('perguntas')
                             .where('id', params.id)
                             .first();
  }

  /**
   * Update departamento details.
   * PUT or PATCH departamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const departamento = await Departamento.findOrFail(params.id)

    const campos = Departamento.getCampoDepartamento()
    const dados = request.only(campos)

    departamento.merge(dados) 
    await departamento.save() 
    return departamento 
  }


  /**
   * Delete a departamento with id.
   * DELETE departamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const departamento = await Departamento.findOrFail(params.id)
    return await departamento.delete();
  }
}

module.exports = DepartamentoController
