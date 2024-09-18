const mongoose = require('mongoose');

const sreviceSchema = mongoose.Schema({
    serviceName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Service = mongoose.model("Service", sreviceSchema);

module.exports = {
    Service
}