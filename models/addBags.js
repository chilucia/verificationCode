const mongoose = require('mongoose')

const BagsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Fullname is required"]
    },
    dec: {
        type: String,
        required: [true, "dec is required"],
    },
    price: {
        type: String,
        required: [true, "Password is required"],
    },
},
{
    timestamps: true
})

const AddBag = mongoose.model('AddBag', BagsSchema)
module.exports= AddBag