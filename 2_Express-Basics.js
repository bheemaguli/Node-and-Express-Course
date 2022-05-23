const express = require('express');
const app = express()

app.get('/', (req, res)=>{
    console.log('User hit the resource')
    res.send('Home Page')
})

app.get('/about', (req, res)=>{
    console.log('User hit the resource')
    res.send('About Page')
})

app.all('*', (req,res)=>{
    res.status(400)
    res.send('<h1>Resource Not found</h1>')
})
app.listen(5000, ()=> {
    console.log('Server is listening on port 5000...')
})