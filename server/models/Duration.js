const { Schema, model } = require('mongoose');

const durationSchema = new Schema({

    duration:{ type: Number, 
            required: true }

});

const Duration = model('Duration', durationSchema);

module.exports = Duration;