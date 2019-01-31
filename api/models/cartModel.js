'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CartSchema = new Schema({
      cart_id: {
        type: Number,
        required: ''
      },

      cartTotalPrice: {
        type: Number,
        required: ''
      },

      inCart: [{
        product_id: {
          type: Number,
          required: ''
        },

        quantity: {
          type: Number,
          required: ''
        },
  
        productTotalPrice: {
          type: Number,
          required: ''
        }
      }]

    });

module.exports = mongoose.model('Cart', CartSchema);

// const CartSchema = new Schema({
//   cart_id: {
//       type: String,
//       required: ''
//     },
    
//   cartTotalPrice: {
//       type: String,
//       required: ''
//     },

//   inCart: [{
//       product_id: {
//         type: String,
//         required: ''
//       },

//       name: {
//         type: String,
//         required: ''
//       },

//       quantity: {
//         type: String,
//         required: ''
//       },

//       productTotalPrice: {
//         type: String,
//         required: ''
//       }
//     }]
   

//   });