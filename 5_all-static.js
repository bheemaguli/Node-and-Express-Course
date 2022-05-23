const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (_, res)=>{
//     res.sendFile(path.join(__dirname, './navbar-app/index.html'))
//     adding to static asset
//     SSR
// })

app.all('*', (_, res)=>{
    res.status(404).send('Page not found...')
})

app.listen(5000, (_, res)=>{
    console.log('Server is listening...')
})