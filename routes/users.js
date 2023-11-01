const express = require('express')

const router = express.Router()

//get all users
router.get('/users', (request, response) => {
    response.status(200)
    response.send('welcome to user page')
})

// get a single user
router.get('/users/:id', (request, response) => {
    response.status(200)
    response.send('welcome to a single user')
})

//add a new user
router.post('/users', (request, response) => {
    response.status(200)
    response.send('new user added')
})

//update a user
router.put('/users/:id', (request, response) => {
    response.status(200)
    response.send('user update')
})

//delete a user
router.delete('/users/:id', (request, response) => {
    response.status(200)
    response.send('user delete')
})





module.exports = router