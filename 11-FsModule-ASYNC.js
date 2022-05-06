const {readFile, writeFile} = require('fs')

console.log('Start')
readFile('./Main/first.txt', 'utf-8', (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)
    const first = result

    readFile('./Main/Sub/second.txt', 'utf-8', (err, result)=>{
        if (err){
            console.log(err)
            return
        }
        console.log(result)
        const second = result

        writeFile('./Main/result-ASYNC.txt',
                `The first file content is "${first}", and the second file content is "${second}".\n`, 
                {flag: 'a'}, 
                (err, result)=>{
                    if (err){
                        console.log(err)
                        return
                    }
                    console.log('Processing')
                }
        )
        
    })
})
console.log('End')