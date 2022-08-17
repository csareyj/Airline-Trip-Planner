const { Schema, model } = require('mongoose');

const destinationSchema = new Schema({

    city:      { type: String, 
                 required: true },
    airport:   { type: String,
                 required: true },
    
});

const Destination = model('Destination', destinationSchema);

module.exports = Destination;