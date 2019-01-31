// 'use strict';

// const mongoose = require('mongoose'),
//     Cart = mongoose.model('Cart');

// exports.list_all = function (req, res) {
//     console.log("kukkuu")
//     Cart.find({}, function(err, cartProduct) {
//         console.log("toimiiko", cartProduct)
//         if (err)
//             res.send(err);
//         res.json(cartProduct);
//     });
// };

const mongoose = require('mongoose'),
    Cart = mongoose.model('Cart');

exports.list_all = function (req, res) {
    console.log('kukkuu')
    Cart.find({}, function(err, cart) {
        console.log(cart)
        if (err)
            res.send(err);
        res.json(cart);
    });
};

exports.create_a_cart = function(req, res) {
    const new_cart = new Cart(req.body);
    new_cart.save(function(err, cart) {
        if (err)
            res.send(err);
        res.json(cart);
    });
};

exports.read_a_cart = function(req, res) {

    Cart.findById(req.params.cart_id, function(err, cart) {
      if (err)
        res.send(err);
      res.json(cart);
    });
  };

exports.update_a_cart = function(req, res) {
    Cart.findOneAndUpdate({id: req.params.cart_id}, req.body, {new: true}, function(err, cart){
        if (err)
            res.send(err);
        res.json(cart);
    });
};

exports.delete_a_cart = function(req, res) {
    Color.remove({
        _id: req.params.taskId},
        function(err, cart) {
            if (err)
                res.send(err);
            res.json({ message: 'Cart deleted'});
        });
};