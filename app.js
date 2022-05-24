const express = require('express')
const app = express()

let { people } = require('./data')

//  static asset
app.use(express.static('./methods-public'))

// parse from data
app.use(express.urlencoded({extended:false}))

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(404).send('Please provide the necessary credentials.')
})


app.listen(5000, ()=>{
    console.log('Server is listining on port 5000...')
})