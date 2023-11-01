const express = require('express')

const app = express()

const port = 8090

const userRouter = require('./routes/users')

app.use(userRouter)

const productRouter = require('./routes/product')

app.use(productRouter)

app.listen(port, () => console.log(`server started successfully`))