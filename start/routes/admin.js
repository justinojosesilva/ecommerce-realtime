'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

    /**
     * Categories resource routes
     */
    Route.resource('categories', 'CategoryControlle').apiOnly()

    /**
     * Products resource routes
     */
    Route.resource('products', 'ProductController').apiOnly()

    /**
     * Coupons resource routes
     */
    Route.resource('coupons', 'CouponController').apiOnly()

    /**
     * Orders resource routes
     */
    Route.resource('orders', 'OrderController').apiOnly()

    /**
     * Images resource routes
     */
    Route.resource('images', 'ImageController').apiOnly()

    /**
     * Users resource routes
     */
    Route.resource('users', 'UserController').apiOnly()


}).prefix('v1/admin')
  .namespace('Admin')
