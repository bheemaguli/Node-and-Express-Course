const express = require('express')
const app = express()

// routes
app.get('/hello', (req, res)=>{
    // console.log(req)
    res.send('Task Manager App')
})

const port = 3000
app. listen(port, console.log(`Server is listening on port ${port}...`))