const {readFile, writeFile} = require('fs').promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

console.log('Start')

const start = async() =>{
    try{
        // const first = await readFilePromise('./Main/first.txt', 'utf8')
        // const second = await readFilePromise('./Main/Sub/second.txt', 'utf8')
        // await writeFilePromise('./Main/result-ASYNC.txt', `This is Awesome: ${first} and ${second}`)

        const first = await readFile('./Main/first.txt', 'utf8')
        const second = await readFile('./Main/Sub/second.txt', 'utf8')
        await writeFile(
            './Main/result-ASYNC.txt', 
            `This is Awesome: ${first} and ${second} \n`, 
            {'flag':'a'})
        console.log(first, second)
    } catch(error) {
        console.log(error)
    }
}
start()
console.log('End')