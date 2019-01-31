// 'use strict';

const mongoose = require('mongoose'),
    Cart = mongoose.model('Cart');

exports.list_all = function (req, res) {
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

    Cart.findById(req.params.cartId, function(err, cart) {
      if (err)
        res.send(err);
      res.json(cart);
    });
  };

exports.update_a_cart = function(req, res) {
    Cart.findOneAndUpdate({id: req.params.cartId}, req.body, {new: true}, function(err, cart){
        if (err)
            res.send(err);
        res.json(cart);
    });
};

exports.delete_a_cart = function(req, res) {
    Color.remove({
        _id: req.params.cartId},
        function(err, cart) {
            if (err)
                res.send(err);
            res.json({ message: 'Cart deleted'});
        });
};