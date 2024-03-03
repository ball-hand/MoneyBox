const express = require('express')
const app = express()
const port = 5000
const mysql = require('mysql')


let connection = mysql.createConnection({
    host    : 'localhost',
    user    :'root',
    password: '',
    database : 'Moneybox'
})
connection.connect(function(error){
    if(error){
        console.log(error)
    }else{
        console.log('koneksi berhasil')
    }
})
app.get('/home',(req,res)=>{
    res.send('hello word')
})

app.listen(port ,()=>{
    console.log('Database Berjalan dengan normal')
})



module.exports = connection