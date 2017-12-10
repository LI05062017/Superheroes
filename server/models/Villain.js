const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const Villain = new Schema({
    name: {type: String, required: true},
    img: {type: String, reqiured: true},
    nemesis: String,
    universe: String
})

module.exports = mongoose.model('Villain', Villain)