const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const blogs = await BlogModel.find({})
        // res.send(blogs)
        res.render('blogs/Blogs', {blogs: blogs})
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
        res.send(blog)
    } catch(error){
        console.log(error)
        res.status(403).send('Cannot get blog')
    }
})

// ^ POST: Create A New Blog Backup

// router.post('/', async (req, res) => {
//     // ^ Try-Catch Method
//     try {
//         const newBlog = await BlogModel.create(req.body)
//         res.send(newBlog)
//     } catch(error) {
//         console.log(error)
//         res.status(403).send('Cannot create')

//     }

// })

// ^ Create a new Blog
router.post('/', async (req, res) => {
    // ^ Try-Catch Method
    try {
        // if (req.body.sponsored === 'on') {
        //     req.body.sponsored === true
        // } else {
        //     req.body.sponsored === false
        // }
        const newBlog = await BlogModel.create(req.body)
        console.log(newBlog)
        res.redirect('/blog')
        // res.send('Blog successfully created!')
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot create')

    }

})


// ^ PUT: Update by ID
router.put('/:id/edit', async (req, res) => {
    try {
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument': 'after'})
        res.send(updatedBlog)
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot update')
    }
})


// ^ Delete
router.delete('/:id', async(req, res) =>{
    try {
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        res.send('Blog Deleted')
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