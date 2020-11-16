const http = require('http')

module.exports = {
    http,

    runServerIndex:(port) =>{
        if(process.argv[2] !== undefined)
            port = process.argv[2]
        
        else 
            port = 4242
           
           let data=''
            http.createServer((req,response)=>{
           response.writeHead(200)
           req.on('data',(chunk)=>{
                data += chunk
           })
           req.on('end',()=>{
               console.log(data)
           })
           
       }).listen(port,()=>{
        console.log("Server is running at port " +port)
    })

    }
}