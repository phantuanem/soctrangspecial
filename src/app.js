const express = require('express')
const router = require('./routes/index')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})