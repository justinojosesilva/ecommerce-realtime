'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {

    /**
     * Utilizando Traits
     */
    static get traits() {
        return ['App/Models/Traits/NoTimestamp']
    }

    /**
     * Relacionamento entre Item do Pedido e Produto
     */
    product() {
        return this.belongsTo('App/Models/Product')
    }

    /**
     * Relacionamento entre Item do Pedido e Pedido
     */
    order() {
        return this.belongsTo('App/Models/Order')
    }

}

module.exports = OrderItem
