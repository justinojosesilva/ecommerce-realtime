'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

    /**
     * Relacionamento entre Pedido e Itens do Pedido
     */
    items() {
        return this.hasMany('App/Models/OrderItem')
    }

    /**
     * Relacionamento entre Pedido e Cupons
     */
    coupons() {
        return this.belongsToMany('App/Models/Coupom')
    }

    /**
     * Relacionamento entre Pedido e Descontos
     */
    discounts() {
        return this.hasMany('App/Models/Discount')
    }

    /**
     * Relacionamento entre Pedido e Usuario
     */
    user() {
        return this.belongsTo('App/Models/User', 'user_id','id')
    }

}

module.exports = Order
