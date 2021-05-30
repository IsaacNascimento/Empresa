'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Departamento extends Model {
    static getCampoDepartamento(){
         return [
            'nome',
            'sigla',
            'ramal' 
        ]
    }
    cargos(){
        return this.hasMany('App/models/Cargo')
    }
    perguntas(){
        return this.hasMany('App/models/Pergunta')
    }

}

module.exports = Departamento
