'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// id: 1,
//       name: 'Fresh',
//       value: '#4ABDAC',
//       price: '109,95 €',
//       description:  '<p>Violetilla valolla uskotaan olevan parantava vaikutus. Se stimuloi solujemme valoa kerääviä entsyymeitä ja parantaa viottunutta dna:ta. Leonardo da Vinci uskoi, että keskittymisvoima kymmenkertaistui purppuraisessa valossa (esim. maalatun lasin läpi). </p> <p>Violetin katsotaan ilmaisevan viisautta ja rakkautta. Sitä pidetään myös eron, irtautumisen ja leskeyden värinä. Joskus violettiin pukeutumista on pidetty osoituksena huonosta mausta, eikä se vieläkään ole vaatteiden värinä kovin yleinen. Violetti kaikkine alasävyineen liitetään useisiin valtauskontojen vastaisiin.</p>'



const ColorSchema = new Schema({
    name: {
        type: String,
        required: 'Fresh'
      },
      value: {
        type: String,
        required: '#4ABDAC'
      },
      price: {
        type: String,
        required: '109,95 €'
      },
      description: {
        type: String,
        required: '<p>Violetilla valolla uskotaan olevan parantava vaikutus. Se stimuloi solujemme valoa kerääviä entsyymeitä ja parantaa viottunutta dna:ta. Leonardo da Vinci uskoi, että keskittymisvoima kymmenkertaistui purppuraisessa valossa (esim. maalatun lasin läpi). </p> <p>Violetin katsotaan ilmaisevan viisautta ja rakkautta. Sitä pidetään myös eron, irtautumisen ja leskeyden värinä. Joskus violettiin pukeutumista on pidetty osoituksena huonosta mausta, eikä se vieläkään ole vaatteiden värinä kovin yleinen. Violetti kaikkine alasävyineen liitetään useisiin valtauskontojen vastaisiin.</p>'
      }

    });

    module.exports = mongoose.model('Colors', ColorSchema);
