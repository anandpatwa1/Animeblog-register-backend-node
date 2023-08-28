const express = require('express')
const { connectDB } = require('./config/db')
const { errorHandler } = require("./middlewere/errorMiddlewere")
const app = express()
require('dotenv').config()
require('colours')

const PORT = process.env.PORT || 5000

connectDB()

// Body Parser 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', require('./routes/userRoutes'))

app.get('/', (req, res) => {
    res.send('Welcome to animes Blog')
})
// aqife23
// aqife G ...u
// mobile app... Firebace
app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Your PORT is runnung at ' + PORT);
})
