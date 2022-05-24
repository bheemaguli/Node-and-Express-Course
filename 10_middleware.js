const express = require('express')
const app = express()
// req => middleware => res

const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

app.use(morgan('tiny'))
// app.use('/api',logger)
// app.use(logger)
app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})

app.get('/api/products', (req, res)=>{
    res.send('Products')
})

app.get('/api/items', (req, res)=>{
    console.log(req.user)
    res.send('Items')
})
app.listen(5000, ()=>{
    console.log('Server is listining on port 5000...')
})