const { Schema, model } = require('mongoose');

const flightsSchema = new Schema({

    destination: { type: String, 
        required: true },
    
    departure: { type: String, 
        required: true },
    
    duration:{ type: String, 
        required: true },
    
    price:{ type: String, 
        required: true },
    
    flightNumber:{ type: String,
        required: true }
    
});

const Flights = model('Flights', flightsSchema);
module.exports = Flights;