'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OpcaoPergunta extends Model {
    static getCampoOpcaoPergunta(){
        return [
            'descricao',
            'valor',
            'pergunta_id' 
        ]
    }
    pergunta(){
        return this.belongsTo('App/models/Pergunta')
    }

}

module.exports = OpcaoPergunta
