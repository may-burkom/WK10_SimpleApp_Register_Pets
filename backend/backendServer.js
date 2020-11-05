const express = require('express')
const multer = require('multer')
const cors = require('cors')
const mongoose = require('mongoose')

const port = 3000
const app = express()
const upload = multer()

const data = require('./data')
const Pets = require('./models/Pets')
const dbAccess = require('./mongoPsw')
const password = dbAccess.MONGODB_URI

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(upload.array())


mongoose.connect(password, {useNewUrlParser: true, useUnifiedTopology: true},
    function(error, database){
        if(error){
            throw error
        }
        console.log("connection made to database")
    }    

)

app.get('/display-pets', function(req, res){
    Pets.find({})
        .then(function(storedInfo){
            console.log(storedInfo)
            res.send(storedInfo)
        })
        .catch(function(err){
            console.log(err)
        })
})

app.post('/register-pet', function(req, res){
    console.log("register route hit")
    console.log(req.body)
    let petObject = {
        name: req.body.petName,
        animal: req.body.petAnimal,
        breed: req.body.petBreed,
        age: req.body.petAge,
        color: req.body.petColor
    }
    petToAdd = new Pets(petObject)

    petToAdd.save()
        .then(function(pet) {
            console.log("PET SAVED!")
            console.log(pet)
            res.send(pet)
        })
        .catch(function(err) {
            console.log(err)
        })
})

app.get('/add', function(req, res){
    Pets.insertMany(data.pets)
        .then(function(pets) {      
        console.log(pets)
        res.send(pets)
    })
    .catch(function(err) {
        console.log(err)
        res.send(err)
    });
})

app.listen(port, function(){
    console.log(`listening at port ${port}...`)
})
