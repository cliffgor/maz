import { createServer } from 'http'

const PORT = process.env.PORT
const users = [
    { id: 1, name: 'Cliff Gor 1' },
    { id: 2, name: 'Cliff Gor 2' },
    { id: 3, name: 'Cliff Gor 3' },
    { id: 4, name: 'Cliff Gor 4' }
]

const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(users))
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Server 2 running on ${PORT}`);

})