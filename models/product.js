const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided'],
    },
    price: {
        type: Number,
        required: [true, 'price must be provided'],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    createdAt:{
        type: Number,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['apple', 'samsung', 'dell', 'mi'],
            message: '{VALUE} is not supported',
        },
    },
});

module.exports = mongoose.model('Product', productSchema);