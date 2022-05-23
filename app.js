const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.json([{name:'Sumanth'}, {name: 'Sudhanva'}])
})

app.listen(5000, ()=>{
    console.log('Server is listining on port 5000...')
})