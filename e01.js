const http = require('http')

module.exports = {
    http,

    runServer:(port) =>{
        if( process.argv[2] === undefined){
            console.log('usage : node main.js <PORT>')
            process.exit(0)
                }        
                
        if(port === undefined)
            port = process.argv[2]

        let server = http.createServer((req,response)=>{
            response.writeHead(200)
            response.write(" <h1> Hello world </h1>")
            response.end()
        })
        server.listen(port,()=>{
            console.log("Server is running at port " +port)
        })
  
    
    }
}