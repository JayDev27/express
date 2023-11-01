const express = require('express')

const router = express.Router()

//get all products
router.get('/product', (request, response) => {
    response.status(200)
    response.send({
        name: 'iphone 6',
        price: '1500',
        ratings: 5,
        desc: 'very good'
    })
})

// get a single product
router.get('/product/:id', (request, response) => {
    response.status(200)
    response.send('welcome to a single product')
})

//add a new product
router.post('/product', (request, response) => {
    response.status(200)
    response.send('new product added')
})

//update a product
router.put('/product/:id', (request, response) => {
    response.status(200)
    response.send('product update')
})

//delete a product
router.delete('/product/:id', (request, response) => {
    response.status(200)
    response.send('product delete')
})

module.exports = router