require('dotenv').config()
const express = require('express')
const app = express()
const pool = require('./config/config')


console.log(process.env)

app.route('/').get((request, response) => {
    response.send('Hello world')
})

app.route('/api/t/:group').get((request, response) => {
    let group = request.params["group"]
    response.send(`Hello ${group}`)
})

app.route('/api/students').get((req, res) => {
    pool.query('Select * from students', (err, result, fields) => {
       if(err) throw err
        res.send(result)
    })
})

app.route('/api/students/:n_z').get((req, res) => {
    let n_z = req.params["n_z"]
    pool.query('Select * from students where n_z = ?' + n_z,
    (err, result, fields) =>{
        if(err) throw err
        res.send(result)
    })
})

app.listen(8080, () => {
       console.log('Server started')
})