const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000

const server = http.createServer((request, response) => {
    const filePath = path.join(__dirname, request.url === "/" ? "index.html" : request.url)

    const extensionName = String(path.extname(filePath)).toLowerCase()

    const mineType = { // manually have to add file types you want to have in your website
        ".html" : "text/html",
        ".css" : "text/css",
        ".js" : "text/javascript",
    }

    const contentType = mineType[extensionName] || 'application.octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err){
            if(err.code === "ENOENT"){
                response.writeHead(404, {"content-type": 'text/html'})
                response.end("BRUHHH, File ain't there anymore!")
            }
        }else {
            response.writeHead(200, {"content-type" : contentType})
            response.end(content, 'utf-8')
        }
    })
})


server.listen(port, () => {
    console.log(`Server is listening to ${port}`)
})