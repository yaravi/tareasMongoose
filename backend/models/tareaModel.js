const mongoose = require ('mongoose')

// CREATE SCHEMA
const tareaSchema = mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // referencia el modelo creado en userModel.js
    },
    text: {
        type: String,
        required: [true, 'Please type text']
    }
}, {
    timestamps: true, // Create createdAt & updatedAt 
})

module.exports = mongoose.model('Tarea', tareaSchema)