// import fs from 'fs';
import fs from 'fs/promises'

// readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }

// })

//readFileSync() - synchronous
// const data = fs.readFileSync('./test.txt', 'utf8')
// console.log(data)

// readFile() - promise
// fs.readFile('./test.txt', 'utf8')
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// readFileSync() - promise - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8')
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

// writeFile() - callback
const writeFIle = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello World write file')
        console.log('File written')
    } catch (err) {
        console.log(err)
    }
}

// appendFile() - callback

const appendFIle = async () => {
    try {
        await fs.appendFile('./test.txt', '\nHello World append file with new line and can not be overridden ')
        console.log('File appended')
    } catch (err) {
        console.log(err)
    }
}


writeFIle()
appendFIle()
readFile()
