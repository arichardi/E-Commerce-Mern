const mongoose = require('mongoose')

//making the basic model schema
const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    orderItems: [
        {
            name: { type: String, require: true},
            qty: { type: Number, require: true},
            image: { type: String, require: true},
            price: { type: Number, require: true},
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', require: true},
        }
    ],
    shippingAdress: {
        adress: { type: String, require: true},
        city: { type: String, require: true},
        postalCode: { type: String, require: true},
        country: { type: String, require: true},
    },
    paymentMethod: {
        type: String,
        require: true,
    },
    paymentResult: {
        id: { type: String},
        status: { type: String},
        update_time: { type: String},
        email_adress: { type: String},
    },
    taxPrice: {
        type: Number,
        require: true,
        default: 0
    },
    shippingPrice: {
        type: Number,
        require: true,
        default: 0
    },
    totalPrice: {
        type: Number,
        require: true,
        default: 0
    },
    isPaid: {
        type: Boolean,
        require: true,
        default: false,
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        require: true,
        default: false,
    },
    deliveredAt: {
        type: Date
    },
}, {
    timestamps: true
})

//make the user model
const Order = mongoose.model('Order', orderSchema)

module.exports = Order