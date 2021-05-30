'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cargo extends Model {
    static getCampoCargo(){
        return [
            'nome',
            'departamento_id' 
        ]
    }
    vagas(){
        return this.hasMany('App/models/Vaga')
    }
    departamento(){
        return this.belongsTo('App/models/Departamento')
    }
}
    


module.exports = Cargo
