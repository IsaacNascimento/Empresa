'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/candidatos', 'CandidatoController').apiOnly()
Route.resource('/cargos', 'CargoController').apiOnly()
Route.resource('/departamentos', 'DepartamentoController').apiOnly()
Route.resource('/empresas', 'EmpresaController').apiOnly()
Route.resource('/opcaoPergunta', 'OpcaoPerguntaController').apiOnly()
Route.resource('/perguntas', 'PerguntaController').apiOnly()
Route.resource('/recrutadores', 'RecrutadorController').apiOnly()
Route.resource('/testePerguntas', 'TestePerguntaController').apiOnly()
Route.resource('/testeSeletivos', 'TesteSeletivoController').apiOnly()
Route.resource('/vagas', 'VagaController').apiOnly()

