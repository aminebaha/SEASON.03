const http = require('http')
const url = require('url')
const fs = require('fs')
module.exports = {
    http,url,fs,

    runServerFile:(file) =>{
        let port = 4242 // plus rapide (je sais tester si process.argv ...)
        file = process.argv[2]
        let readBuffer = fs.createReadStream(file)
        let result = []
        
            http.createServer((req,response)=>{
            response.writeHead(200)   
            readBuffer.on('data',(chunk)=>{
                
                    result.push(chunk.toString())
                   // console.log(result)
            })
           
            readBuffer.on('close',()=>{
                console.log(result)
            })
            response.write(result.join())
                response.end()
           }).listen(port,()=>{
            console.log("Server is running at port " +port)
        })

    }
}