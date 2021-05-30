'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TestePergunta extends Model {
    static getCampoTestePergunta(){
            return [
            'pergunta_id',
            'teste_seletivos_id',
            'candidato_id',
            'resposta' 
        ]
    }   
    candidatos(){
        return this.belongsTo('App/models/Candidato')
    }
    pergunta(){
        return this.belongsTo('App/Models/Pergunta')
    }
    teste_seletivo(){
        return this.belongsTo('App/models/TesteSeletivo')
    }
}

module.exports = TestePergunta
