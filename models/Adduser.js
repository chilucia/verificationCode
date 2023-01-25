const mongoose = require('mongoose')

const AddUsersSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Fullname is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    token: {
        type: String,
    },
    verify: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

},
{
    timestamps: true
})

const AddUser = mongoose.model('AddUser', AddUsersSchema)
module.exports= AddUser