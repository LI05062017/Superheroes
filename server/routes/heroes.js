const express = require('express')
const Router = express.Router()
const SuperHero = require('../models/SuperHero')


Router.route('/api/heroes')
.get((req, res) => {
  SuperHero.find()
  .populate('nemesis')
  .exec((err, heroes) => {
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
  SuperHero.findById({_id: heroId})
  .populate('nemesis')
  .exec((err, hero) => {
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

Router.route('/api/heroes/:heroId')
.put((req, res) => {
  const editHeroId = req.params.heroId
  SuperHero.findById({ _id: editHeroId}, (err, hero) => {
    if (err) {
      console.log( 'ERROR GETTING HERE', err)
      res.json({ error: err })
    } else {
      hero.name = req.body.name ? req.body.name : hero.name
      hero.superPower = req.body.superPower ? req.body.superPower : hero.superPower
      hero.img = req.body.img ? req.body.img : hero.img
      hero.nemesis = req.body.nemesis ? req.body.nemesis : hero.nemesis
      hero.universe = req.body.universe ? req.body.universe : hero.universe

      hero.save((err, updatedHero) => {
        if(err) {
          console.log('ERROR SAVING HERO', err)
          res.json({ error: err })
        } else {
          res.json({ msg: 'Successfully updated', hero: updatedHero })
        }
      })
    }
  })
})


module.exports = Router