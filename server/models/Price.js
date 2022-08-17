const { Schema, model } = require('mongoose');

const priceSchema = new Schema({

    price:{ type: Number, 
            required: true }

});

const Price = model('Price', priceSchema);

module.exports = Price;