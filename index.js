const errorHandler = require('./helpers/errorHandler')
require('dotenv').config({ path: './variables.env' })
const router = require('./routes')
const express = require('express')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 4000

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded())
app.use(express.json())

app.use('/', router)
app.use(errorHandler.handler404)
app.use(errorHandler.handlerServerErrors)

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})