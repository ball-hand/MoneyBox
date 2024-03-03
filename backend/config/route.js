const express = require('express')
const route = express.Router()
const conn = require('../config/db')
const {body, ValidationResult, validationResult} = require('express-validator')

route.post('/',[
    body ('id').notEmpty(),
    body ('nama ').notEmpty()
],(req,res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(200).json({
            errors : errors.array()
        })
    }

    let FormData = {
        id : req.body.id,
        nama : req.body.nama
    }
    conn.query('INSERT INTO administrator set ?',FormData,(err,rows)=>{
        if(err){
            return res.status(500).send('cant input your data')
        }else{
            return res.status(200).json({data : rows[0]})
        }
    })
})


route.get('/', (req, res) => {
    conn.query('select*from administrator', (error, result, field) => {
        if (error) {
            res.status(404).send('sory cant find your data')
        } else {
            res.status(200).json({ result })
        }
    })
})

module.exports = route