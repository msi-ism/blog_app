const express = require('express')
const UserModel = require('../models/UserSchema')
const bcrypt = require('bcryptjs')

const router = express.Router()
//  * User Testing

router.get('/', async(req, res) => {
    try {
        const users = await UserModel.find({})
        res.send(users)
    } catch(error){
        console.log(error)
        res.status(403).send('Cannot get blog')
    }
})


 // * SignUp User Route

// ^ Render a Signup Form

router.get('/signup', (req, res) => {
    res.render('users/Signup.jsx')
 })

 // * SignIn User Route

// ^ Render Sign-In Form

router.get('/signin', (req, res) => {
    res.render('users/Signin.jsx')
})

router.post('/signin', async (req, res) => {
    try {
        // ^ find user by email
        const user = await UserModel.findOne({email: req.body.email})
        if (!user) return res.send('Login Unsuccessful: Please check your login info & try again')
        // ^ check if passwords match
        const decodedPassword = await bcrypt.compare(req.body.password, user.password)
        if (!decodedPassword) return res.send('Login Unsuccessful: Please check your login info & try again')
        // * Set User Session
        // ^ create a new username in the session obj using the user info from db
        req.session.username = user.username
        req.session.loggedIn = true
        // ^ redirect to /blogs
        res.redirect('/blog')

    } catch (error) {

    }
})


// * Signout User & destroy session
router.get('/signout', (req, res) => {
    try {
        req.session.destroy()
        res.redirect('/')
        
    } catch (error) {
        console.log(error)
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


// ^ POST: Create A New User

router.post('/signup', async (req, res) => {
    // ^ Try-Catch Method
    try {
        // ^ Below checks if a user already exists
        const userAlreadyExists = await UserModel.find({email: req.body.email})
        console.log(userAlreadyExists)
        if (userAlreadyExists[0]){
            return res.send('This email is already in use. Please try to login using this email.')
        }
        // ^ Below creates a new user
        const SALT = await bcrypt.genSalt(10)  // ^ how secure your hash will be
        req.body.password = await bcrypt.hash(req.body.password, SALT) // ^  re-assign password to hashed password
        const newUser = await UserModel.create(req.body)
        // ^ Below is how to test that new user is being created by sending JSON
        // res.send(newUser)
        res.redirect('/users/signin')
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