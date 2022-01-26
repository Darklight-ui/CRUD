const mongoose = require('mongoose');

const dataCollectionSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    othername: { type: String, required: false },
    sex: { type: String, required: true },
    age: {type: Number, required: true}
})

module.exports = mongoose.model('DataCollected', dataCollectionSchema)