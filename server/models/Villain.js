const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const Villain = new Schema({
    name: {type: String, required: true},
    img: {type: String, reqiured: true},
    nemesis: { type: Schema.Types.ObjectId, ref: 'SuperHero'},
    universe: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = mongoose.model('Villain', Villain)