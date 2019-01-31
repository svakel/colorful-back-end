'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ColorSchema = new Schema({
      name: {
        type: String,
        required: ''
      },
      value: {
        type: String,
        required: ''
      },
      price: {
        type: Number,
        required: ''
      },
      description: {
        type: String,
        required: ''
      }

    });


    

module.exports = mongoose.model('Colors', ColorSchema);
