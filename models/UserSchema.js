const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: { createdAt: 'created_at' }
    }
)
const User = mongoose.model('User', userSchema)

module.exports = User