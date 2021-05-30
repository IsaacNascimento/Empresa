'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TesteSeletivo extends Model {
    static getCampoTesteSeletivo(){
            return [
            'nome',
            'teste_data'
        ]
    }
    
    vagas(){
        return this.hasMany('App/models/Vaga')
    }
    perguntas(){
     return this.belongsToMany('App/Models/Pergunta').pivotTable('teste_perguntas')
    }
}

module.exports = TesteSeletivo
