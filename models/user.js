const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    licenseNumber: {
        type: String,
        required: true,
        // unique: true
    },
    dob: {
        type: Date,
        required: true,
    },
    carDetails: {
        make: String,
        model: String,
        year: Number,
        plateNumber: String
    } 
})

module.exports = mongoose.model("user", userSchema)