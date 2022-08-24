const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 7;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
        // .+ at least one of any character (1+ wildcard)
        // @ is just an @ symbol
        // \. means escaped period (just a period)
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        match: [/[a-zA-Z0-9!]+/i, "Must use a-z or 0-0 or ! OR -"]
    },
    flightList: [{
        type: Schema.Types.ObjectId,
        ref: "Flights"
    }]
});

userSchema.pre('save', function(next) {
    var user = this;
    console.log({hookThis: user});

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// userSchema.pre('save', (next, ...args) => {
//     console.log(args);
//     next();
// });

userSchema.methods.comparePassword = async function(candidatePassword) {
    try{
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        console.log(err);
        return false;
    }    
    };

const User = model('User', userSchema);
module.exports = User;