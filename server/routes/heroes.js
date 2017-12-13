const express = require('express')
const Router = express.Router()
const SuperHero = require('../models/SuperHero')

Router.route('/api/heroes')
.get((req, res) => {
  SuperHero.find((err, heroes) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', heroes})
    }
  })
})

//Router.route('/endpoint')
// .method((callback))


Router.route('/api/heroes') 
.post((req, res) => {
  const {name, superPower, img, universe, nemesis} = req.body
  const newHero = {name, superPower, img, universe, nemesis}

 SuperHero (newHero).save((err, savedPost) => {
   if (err) {
     res.json({ error: err })
   } else{
     res.json({ msg: 'Your Hero was successfully created!🌟', data: savedPost})
   }
 })
})

Router.route('/api/heroes/:heroId')
.get((req, res) => {
  const heroId = req.params.heroId
  SuperHero.findById({_id: heroId}, (err, hero) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', hero})
    }
  })
})

Router.route('/api/heroes/:heroId')
.delete((req, res) => {
  const deleteId = req.params.heroId
  SuperHero.remove({_id: deleteId}, (err, hero) => {
    if (err) { 
      res.json({ error: err })
    } else {
      res.json({ msg: 'Your superhero was deleted!', hero})
    }
  })
})



module.exports = Router