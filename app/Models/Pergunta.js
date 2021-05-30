'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pergunta extends Model {
    static getCampoPergunta(){
            return [
            'nome',                   
            'tipo',
            'descricao',
            'gabarito',
            'departamento_id' 
        ]
    }
    departamento(){
        return this.belongsTo('App/models/Departamento')
    }
    opcao_perguntas(){
        return this.hasMany('App/models/OpcaoPergunta')
    }
    teste_seletivos(){
        return this.belongsToMany('App/Models/TesteSeletivo').pivotTable('teste_perguntas')
    }
}
module.exports = Pergunta
