const express = require('express')
const Router = express.Router()
const Villain = require('../models/Villain')

Router.route('api/villains')
.post((req, res) => {
  const {name, img, nemesis, universe} = req.body
  const newVillain = {name, img, nemesis, universe}

  Villain (newVillain).save((err, savedPost) => {
    if(err) {
      res.json({ error: err })
    } else {
      res.json({msg: 'Your Villan was successfully created!⚡️', data: savedPost})
    }
  })
})

Router.route('api.villains')
.get((req, res) => {
  Villain.find((err, villains) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', villains})
    }
  })
})

Router.route('/api/villains/:villainId')
.delete((req, res) => {
  const deleteId = req.params.villainId
  Villain.remove({_id: deleteId}, (err, villain) => {
    if (err) {
     res.json({ error: err})
    } else {
      res.json({ msg: 'Your villain was deleted', villain})
    }
  })
 })
 
module.exports = Router