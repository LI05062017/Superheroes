// 3) Your superhero should have a name, superpower, img and universe

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SuperHero = new Schema({
  name: { type: String, required: true}, 
  superpower: String,
  img: { type: String, required: true },
  universe: String,
  nemesis: String

})

module.exports = mongoose.model('SuperHero', SuperHero)