'use strict';
module.exports = function(app) {
     const carts = require('../controllers/cartController');


// cart Routes
app.route('/cart')
     .get(carts.list_all)
     .post(carts.create_a_cart);


app.route('/cart/:cart_id')
    .get(carts.read_a_cart)
    .put(carts.update_a_cart)
    .delete(carts.delete_a_cart);
};