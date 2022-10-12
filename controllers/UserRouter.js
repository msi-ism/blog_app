const express = require('express')
const UserModel = require('../models/UserSchema')

const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const users = await UserModel.find({})
        res.send(users)
    } catch(error){
        console.log(error)
        res.status(403).send('Cannot get blog')
    }
})


router.get('/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        res.send(user)
    } catch(error){
        console.log(error)
        res.status(403).send('Cannot get user')
    }
})

// ^ POST: Create A New Blog

router.post('/', async (req, res) => {
    // ^ Try-Catch Method
    try {
        // ^ Below checks if a user already exists
        const userAlreadyExists = await UserModel.find({email: req.body.email})
        console.log(userAlreadyExists)
        if (userAlreadyExists[0]){
            return res.send('This email is already in use. Please try to login using this email.')
        }
        // ^ Below creates a new user
        const newUser = await UserModel.create(req.body)
        res.send(newUser)
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot create')

    }

})

// ^ PUT: Update by ID
router.put('/:id/edit', async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument': 'after'})
        res.send(updatedUser)
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot update')
    }
})


// ^ DELETE: Delete user by ID
router.delete('/:id/delete', async(req, res) =>{
    try {
        const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
        res.send('User Deleted')
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot update')
    }
})



module.exports = router