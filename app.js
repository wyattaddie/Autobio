const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    if(req.url == '/order'){
        fs.createReadStream('order').pipe(res)
    }
    if(req.url == '/'){
        fs.createReadStream('home.html').pipe(res)
    }
    
})

server.listen(2633,console.log('listening at: http://localhost:2633'))