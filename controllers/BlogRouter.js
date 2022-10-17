const { application } = require('express')
const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

// * Add privacy to router

router.use((req, res, next) => {
    if(req.session.loggedIn) {
        next()
    } else {
        res.redirect('/users/signin')
    }
})

router.get('/', async(req, res) => {
    try {
        const blogs = await BlogModel.find({})
        // res.send(blogs)
        // ^ Below renders blogs 
        res.render('blogs/Blogs', {blogs: blogs, loggedInUser: req.session.username})
    } catch(error){
        console.log(error)
        res.status(403).send('Cannot get blog')
    }
})

// ^ Render New Blog Form
router.get('/new', (req, res) => {
    res.render('blogs/New')
})


router.get('/:id', async (req, res) => {
    try {
        const blog = await BlogModel.findById(req.params.id)
        res.render('blogs/ShowBlogs', {blog: blog})
    } catch(error){
        console.log(error)
        res.status(403).send('Cannot get blog')
    }
})

// ^ POST: Create A New Blog Backup

// ^ Create a new Blog
router.post('/', async (req, res) => {
    // ^ Try-Catch Method
    try {
        if (req.body.sponsored === 'on') {
            req.body.sponsored = true
        } else {
            req.body.sponsored = false
        }
        // ^ Below changes blog author to username
        req.body.author = req.session.username
        const newBlog = await BlogModel.create(req.body)
        console.log(newBlog)
        res.redirect('/blog')
        // res.send('Blog successfully created!')
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot create')

    }

})

// ^ GET: Edit Page
router.get('/:id/edit', async (req, res) => {
    const blog = await BlogModel.findById(req.params.id)
    res.render('blogs/Edit', {blog: blog})
})

// ^ PUT: Edit Blog
router.put('/:id', async (req, res) => {
    try {
        if (req.body.sponsored === 'on') {
            req.body.sponsored = true
        } else {
            req.body.sponsored = false
        }
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument': 'after'})
        res.redirect('/blog')
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot update blog')
    }
})



// ^ Delete
router.delete('/:id', async(req, res) =>{
    try {
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        res.redirect('/blog')
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot update')
    }
})






// ^ Dot Then Method
// router.post('/', (req, res) => {
//     // ^ Create New Blow
//     BlogModel.create(req.body)
//     .then(data => {
//         console.log(data)
//         res.send(data)
//     })
//     // ^ Catch error if any
//     .catch(error => {
//         console.log(error)
//         res.status(403).send('Cannot create.')
//     })
// })


module.exports = router