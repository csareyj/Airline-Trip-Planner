const { Schema, model } = require('mongoose');

const departureSchema = new Schema({

    city:      { type: String, 
                 required: true },
    airport:   { type: String,
                 required: true },
    
});

const Departure = model('Departure', departureSchema);
module.exports = Departure;