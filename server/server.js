const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const SuperHero = require('./models/SuperHero')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/superheros')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

const myFirstPost = {name: 'Fred', superpower: 'invisible', img: 'Fred.com', universe: 'mars', nemesis: 'Bob'}

app.post('/api/heroes', (req, res) => {
  const {name, superPower, img, universe, nemesis} = req.body
  const newHero = {name, superPower, img, universe, nemesis}

 SuperHero (newHero).save((err, savedPost) => {
   if (err) {
     res.json({ error: err })
   } else{
     res.json({ msg: 'Your post was successfully created!😀', data: savedPost})
   }
 })
})

app.get('/api/heroes', (req, res) => {
  SuperHero.find((err, heroes) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', heroes})
    }
  })
})

app.get('/api/heroes/:heroId', (req, res) => {
  const heroId = req.params.heroId
  SuperHero.findById({_id: heroId}, (err, hero) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', hero})
    }
  })
})

app.delete('/api/heroes/:heroId', (req, res) => {
  const deleteId = req.params.heroId
  SuperHero.remove({_id: deleteId}, (err, hero) => {
    if (err) { 
      res.json({ error: err })
    } else {
      res.json({ msg: 'Your superhero was deleted!', hero})
    }
  })
})

const server = app.listen(port, () => console.log(`🔥Running on port: ${port}`))

module.exports = server
