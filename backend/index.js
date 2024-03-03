const express = require('express')
const app = express()
const port = 3000
const route = require('../backend/config/route')
const bodyParser = require('body-parser')

app.get(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/administrator',route)
app.use('/Tambah_admin', route)


app.listen(port,()=>{
    console.log(`Has runing at ${port}`)
})