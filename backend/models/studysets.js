const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studysetSchema = new Schema({
    title: {
        type: String,
        requried: true
    },
    cards: {
        type: Array,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('StudySet', studysetSchema)
