'use strict'

class CouponService {

    constructor(model, transation = null) {
        this.model = model
        this.transation = transation
    }

    async syncUsers(users) {
        if (!Array.isArray(users)) {
            return false
        }
        await this.model.users().sync(users, null, this.transation)
    }

    async syncOrders(orders) {
        if(!Array.isArray(orders)) {
            return false
        }
        await this.model.orders().sync(orders, null, this.transation)
    }

    async syncProducts(products) {
        if(!Array.isArray(products)) {
            return false
        }
        await this.model.products().sync(products, null, this.transation)
    }

}

module.exports = CouponService