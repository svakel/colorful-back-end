//'use strict';

const mongoose = require('mongoose'),
    Color = mongoose.model('Colors');

exports.list_all_colors = function (req, res) {
    Color.find({}, function(err, color) {
        if (err)
            res.send(err);
        res.json(color);
    });
};

exports.create_a_color = function(req, res) {
    const new_color = new Color(req.body);
    new_color.save(function(err, color) {
        if (err)
            res.send(err);
        res.json(color);
    });
};

exports.read_a_color = function(req, res) {
    Color.findById(req.params.product_id, function(err, color) {
      if (err)
        res.send(err);
      res.json(color);
    });
  };

exports.update_a_color = function(req, res) {
    Color.findOneAndUpdate({_id: req.params.colorId}, req.body, {new: true}, function(err, color){
        if (err)
            res.send(err);
        res.json(color);
    });
};

exports.delete_a_color = function(req, res) {
    Color.remove({
        _id: req.params.taskId},
        function(err, color) {
            if (err)
                res.send(err);
            res.json({ message: 'Color deleted'});
        });
};