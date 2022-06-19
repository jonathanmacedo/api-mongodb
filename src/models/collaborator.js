const mongoose = require('mongoose')

const Collaborator = mongoose.model('Collaborator', {
    name: String,
    age: Number,
    sex: String,
    sector: String,
    badge: Number,
    fired: Boolean,    
})

module.exports = Collaborator