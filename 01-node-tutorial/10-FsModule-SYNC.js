const {readFileSync, writeFileSync} = require('fs')

console.log('Start')
const first = readFileSync('./Main/first.txt', 'utf8')
const second = readFileSync('./Main/Sub/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
    './Main/result.txt',
    `The first file content is "${first}", and the second file content is "${second}".\n`, 
    {flag: 'a'},
    console.log('Processing')
)
console.log('End')