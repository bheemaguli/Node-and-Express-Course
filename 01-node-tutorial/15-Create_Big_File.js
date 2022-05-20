const { writeFileSync} = require('fs')

for (let i=0;i<10000;i++){
    writeFileSync('./Main/big.txt', `Hello World No ${i}\n`, {flag:'a'})
}