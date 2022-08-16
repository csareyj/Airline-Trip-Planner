const { Schema, model } = require('mongoose');

const flightInfoSchema = new Schema({
    name: { type: String, 
            required: true },
    price:{ type: Number, 
            required: true },
    departure: { type: String,
                 required: true },
    destination: { type: String, 
                   required: true },
    duration: { type: Number,
                required: true }

});

const FlightInfo = model('FlightInfo', flightInfoSchema);

module.exports = FlightInfo;