const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const SuperHero = require('./models/SuperHero')
const Villain = require('./models/Villain')
const heroRoutes = require('./routes/heroes')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/superheros')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.post('/api/villains', (req, res) => {
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

app.get('/api/villains', (req, res) => {
  Villain.find((err, villains) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', villains})
    }
  })
})

app.delete('/api/villains/:villainId', (req, res) => {
 const deleteId = req.params.villainId
 Villain.remove({_id: deleteId}, (err, villain) => {
   if (err) {
    res.json({ error: err})
   } else {
     res.json({ msg: 'Your villain was deleted', villain})
   }
 })
})

app.use('/', heroRoutes)


const server = app.listen(port, () => console.log(`🔥Running on port: ${port}`))

module.exports = server
