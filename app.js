const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const Blog = require('./models/BlogSchema')
require('dotenv').config()
const methodOverride = require('method-override')

const app = express()

const PORT = 3000

app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json())
// ^ Below needed whenever setting up a new form - to read data from post request
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log('I run for all routes')
    // ^
    next() // ^ Tells Express to go to next middleware or send response 

})

// ^ App Settings - Setting app to use express view engine using jsx

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ^ Defining Routes
app.use('/blog', require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))


app.get('/', (req, res) => {
    res.render('pages/HomePage')
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
    // ^ Connects to MongoDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // ^ Below gives confirmation that database is connected
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB')
    })
})


