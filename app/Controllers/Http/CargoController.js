'use strict'

const Cargo = use('App/models/Cargo')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cargos
 */
class CargoController {
  /**
   * Show a list of all cargos.
   * GET cargos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Cargo.query().paginate(page, perPage);
  }


  /**
   * Create/save a new cargo.
   * POST cargos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
    const campos = Cargo.getCampoCargo() //requisição de uma variável em outro arquivo
    const cargos = request.only(campos) //chamando a variável em outra linha
    return await Cargo.create(cargos)
  }

  /**
   * Display a single cargo.
   * GET cargos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async show ({ params, request, response, view }) {
    return await Cargo.query()
                      .with('vagas')
                      .with('departamento')
                      .where('id', params.id)
                      .first();
  }
  
  /**
   * Update cargo details.
   * PUT or PATCH cargos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const cargo = await Cargo.findOrFail(params.id)

    const campos = Cargo.getCampoCargo()
    const dados = request.only(campos)

    cargo.merge(dados) 
    await cargo.save() 
    return cargo 
  }


  /**
   * Delete a cargo with id.
   * DELETE cargos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const cargo = await Cargo.findOrFail(params.id)
    return await cargo.delete();
  }
}

module.exports = CargoController
