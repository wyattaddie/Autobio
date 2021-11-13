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

var port = process.env.PORT || 2633;
server.listen(port, () => {console.log('listening at: http://localhost:2633')})
