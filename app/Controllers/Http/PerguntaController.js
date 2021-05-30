'use strict'

const Pergunta = use('App/models/Pergunta')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with perguntas
 */
class PerguntaController {
  /**
   * Show a list of all perguntas.
   * GET perguntas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Pergunta.query().paginate(page, perPage);
  }


  /**
   * Create/save a new pergunta.
   * POST perguntas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
    const campos = Pergunta.getCampoPergunta() //requisição de uma variável em outro arquivo
    const perguntas = request.only(campos) //chamando a variável em outra linha
    return await Pergunta.create(perguntas)
  }

  /**
   * Display a single pergunta.
   * GET perguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async show ({ params, request, response, view }) {
    return await Pergunta.query()
                         .with('departamento')
                         .with('opcao_perguntas')
                         .with('teste_seletivos')
                         .where('id', params.id)
                         .first();
  }

  /**
   * Update pergunta details.
   * PUT or PATCH perguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const pergunta = await Pergunta.findOrFail(params.id)

    const campos = Pergunta.getCampoPergunta()
    const dados = request.only(campos)

    pergunta.merge(dados) 
    await pergunta.save() 
    return pergunta 
  }


  /**
   * Delete a pergunta with id.
   * DELETE perguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const pergunta = await Pergunta.findOrFail(params.id)
    return await pergunta.delete();
  }
}

module.exports = PerguntaController
