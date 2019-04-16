const express = require('express')
const app = express()

app.route('/').get((request, response) => {
    response.send('Hello world')
})

app.route('/:group').get((request, response) => {
    let group = request.params["group"]
    response.send(`Hello ${group}`)
})

app.listen(8080, () => {
       console.log('Server started')
})