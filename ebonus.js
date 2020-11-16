const http = require('http')
const fs = require('fs')
module.exports = {
    http,

    runServerSign:(port) =>{
        if( process.argv[2] === undefined)
            console.log('usage : node main.js <PORT>')
        if(port === undefined)
            port = process.argv[2]

        let server = http.createServer((req,response)=>{
            response.writeHead(200)

            if(req.method==='POST'){
                let body=''
                req.on('data', function (chunk) {
                    body += chunk;
                });
            
                req.on('end', function() {
                    fs.writeFile('account.json', body,(err)=>{
                        if(err)
                            throw err
                    });
                    response.end(()=>{
                        console.log(body)
                    });
                })
            }
            if(req.method==='GET') {
            
            let data = ''
                req.on('data',(chunk)=>{
                    data += chunk
               })
               req.on('end',()=>{
                   console.log(data)
               })

            }
          response.end()
        })
        server.listen(port,()=>{
            console.log("Server is running at port " +port)
        })
   
        
    
    
    }
}