const mongoose = require ('mongoose')

// CREATE SCHEMA
const tareaSchema = mongoose.Schema ({
    text: {
        type: String,
        required: [true, 'Please type text']
    }
}, {
    timestamps: true, 
})

module.exports = mongoose.model('Tarea', tareaSchema)