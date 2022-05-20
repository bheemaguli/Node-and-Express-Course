const {createReadStream} = require('fs');
const { result } = require('lodash');
const { Stream } = require('stream');

const stream = createReadStream('./Main/big.txt', 
    {highWaterMark:90000,
    encoding:'utf-8'});

stream.on('data', (result)=>{
    console.log(result)
})

stream.on('error', (err)=> console.log(err))