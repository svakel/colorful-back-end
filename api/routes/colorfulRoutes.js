'use strict';
module.exports = function(app) {
    const colors = require('../controllers/colorfulController');
    //const carts = require('../controllers/cartController');


// colors Routes
app.route('/colors')
    .get(colors.list_all_colors)
    .post(colors.create_a_color);

app.route('/colors/:colorId')
    .get(colors.read_a_color)
    .put(colors.update_a_color)
    .delete(colors.delete_a_color);

//app.route('/cart')
  //  .get(carts.list_all);


};