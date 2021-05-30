'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Candidato extends Model {
    static get table(){
        return 'candidatos'
    }
 static getCampoCandidato(){
    return [
            'nome',
            'cpf',
            'email',
            'telefone',
            'carteira_trabalho'
        ]
    }
    teste_perguntas(){
        return this.hasMany('App/Models/TestePergunta')
    }
}

module.exports = Candidato
