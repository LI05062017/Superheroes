const express = require('express')
const Router = express.Router()
const Villain = require('../models/Villain')
const Comment = require('../models/Comment')

Router.route('/api/villains')
.get((req, res) => {
  Villain.find()
  .populate('nemesis')
  .populate('comments')
  .exec((err, villains) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', villains})
    }
  })
})


Router.route('/api/villains')
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

Router.route('/api/villains/:villainId/comments')
.post((req,res ) => {
  const {text} = req.body
  const newComment = {text}

  Comment(newComment).save((err, savedComment) => {
    if (err) {
      res.json({ error: err})
    } else {
      Villain.findById({ _id: req.params.villainId} , (err, villain) => {
        if (err) {
          res.json({ error: err })
        } else {
          villain.comments.push(savedComment._id)
          villain.save((err, updatedVillain) => {
            if (err) {
              res.json({ error: err })
            } else {
              res.json({ msg: 'Success', data: updatedVillain })
            }
          })
        }
      })
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

 Router.route('/api/villains/:villainId')
 .get((req, res) => {
  const villainId = req.params.villainId
   Villain.findById({_id: villainId})
   .populate('nemesis')
   .populate('comments')
   .exec((err,villain) => {
     if (err) {
       res.json ({ error: err })
     } else {
       res.json({ msg: 'Villain Found', villain})
     }
   })
 })

 Router.route('/api/villains/:villainId')
 .put((req, res) => {
   const editVillainId = req.params.villainId
   Villain.findById({ _id: editVillainId}, (err, villain) => {
     if (err) {
       console.log( 'ERROR GETTING HERE', err)
       res.json({ error: err })
     } else {
       villain.name = req.body.name ? req.body.name : villain.name
       villain.img = req.body.img ? req.body.img : villain.img
       villain.nemesis = req.body.nemesis ? req.body.nemesis : villain.nemesis
       villain.universe = req.body.universe ? req.body.universe : villain.universe
 
       villain.save((err, updatedVillain) => {
         if(err) {
           console.log('ERROR SAVING Villain', err)
           res.json({ error: err })
         } else {
           res.json({ msg: 'Successfully updated', villain: updatedVillain })
         }
       })
     }
   })
 })
 
module.exports = Router