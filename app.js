const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const Blog = require('./models/BlogSchema')
require('dotenv').config()


const app = express()

const PORT = 3000

app.use(morgan('dev'))
app.use(express.json())

// ^ App Settings - Setting app to use express view engine using jsx

app.set('view engine', 'jsx')

app.engine('jsx', require('express-react-views').createEngine())

// ^ Defining Routes
app.use('/blog', require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))


app.get('/', (req, res) => {
    res.send('Hello')
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