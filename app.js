// app.js
const express = require('express')
const cors = require('cors')
const contactRouter = require('./routes/contact.route')
// Create Express app
const app = express()

app.use(cors())
app.use(express.json())
// A sample route
app.get('/', (req, res) => res.send('Hello World!'))

app.use("/api/contacts",contactRouter)

module.exports=app