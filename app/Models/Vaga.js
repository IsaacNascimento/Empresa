'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vaga extends Model {
    static getCampoVaga(){
            return [
            'nome',
            'salario',
            'turno',
            'carga_horaria',
            'cargo_id',
            'empresa_id',
            'teste_seletivo_id'
        ]
    }
    empresa(){
        return this.belongsTo('App/models/Empresa')
    }
    cargo(){
        return this.belongsTo('App/models/Cargo')
    }
    teste_seletivo(){
        return this.belongsTo('App/models/TesteSeletivo')
    }
}

module.exports = Vaga
