'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Recrutador extends Model {

    static get table(){
    return 'recrutadores';
    }
static getCampoRecrutador(){
            return [
            'nome',
            'cpf',
            'email',
            'telefone',
            'empresa_id' 
        ]
    }
    empresa(){
        return this.belongsTo('App/Models/Empresa')
    }
}

module.exports = Recrutador
