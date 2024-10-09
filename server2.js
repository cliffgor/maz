import { createServer } from 'http'
import { json } from 'stream/consumers';

const PORT = process.env.PORT
const users = [
    { id: 1, name: 'Cliff Gor 1' },
    { id: 2, name: 'Cliff Gor 2' },
    { id: 3, name: 'Cliff Gor 3' },
    { id: 4, name: 'Cliff Gor 4' }
]

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()

}

// JSON Middleware
const jsonMIddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
}

// Route handler for  GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users))
    res.end()
}

// Route handler for /api/users/:id
const getUserById = (req, res) => {
    const id = req.url.split('/')[3]
    const user = users.find((user) => user.id === parseInt(id))
    if (user) {
        res.write(JSON.stringify(user))
    } else {

        res.statusCode = 404
        res.write(JSON.stringify({ message: 'User not found' }))

    }
    res.end()
}

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404
    res.write(JSON.stringify({ message: 'Route not found' }))
    res.end()
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMIddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler()
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUserById(req, res)
            } else {
                notFoundHandler(req, res)
            }
        })
    })
})

server.listen(PORT, () => {
    console.log(`Server 2 running on ${PORT}`);

})