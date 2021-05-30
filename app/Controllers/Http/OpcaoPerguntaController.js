'use strict'

const OpcaoPergunta = use('App/models/OpcaoPergunta')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with opcaoPerguntas
 */
class OpcaoPerguntaController {
  /**
   * Show a list of all opcaoPerguntas.
   * GET opcaoPerguntas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return OpcaoPergunta.query().paginate(page, perPage);
  }


  /**
   * Create/save a new opcaoPergunta.
   * POST opcaoPerguntas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
    const campos = OpcaoPergunta.getCampoOpcaoPergunta() //requisição de uma variável em outro arquivo
    const opcaoPerguntas = request.only(campos) //chamando a variável em outra linha
    return await OpcaoPergunta.create(opcaoPerguntas)
  }

  /**
   * Display a single opcaoPergunta.
   * GET opcaoPerguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async show ({ params, request, response, view }) {
    return await OpcaoPergunta.query()
                              .with('pergunta')
                              .where('id', params.id)
                              .first();
  }

  /**
   * Update opcaoPergunta details.
   * PUT or PATCH opcaoPerguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const opcaoPergunta = await OpcaoPergunta.findOrFail(params.id)

    const campos = OpcaoPergunta.getCampoOpcaoPergunta()
    const dados = request.only(campos)

    opcaoPergunta.merge(dados) 
    await opcaoPergunta.save() 
    return opcaoPergunta 
  }


  /**
   * Delete a opcaoPergunta with id.
   * DELETE opcaoPerguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const opcaoPergunta = await OpcaoPergunta.findOrFail(params.id)
    return await opcaoPergunta.delete();
  }
}

module.exports = OpcaoPerguntaController
