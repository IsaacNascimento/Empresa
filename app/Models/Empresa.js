'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Empresa extends Model {
    static getCampoEmpresa(){
        return [
            'nome', 
            'cnpj',
            'telefone',
            'email'
        ]
    }
    vagas(){
        return this.hasMany('App/models/Vaga')
    }
    recrutadores(){
        return this.hasMany('App/models/Recrutador')
    }
}

module.exports = Empresa
