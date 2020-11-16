const http = require('http')
const url = require('url')
module.exports = {
    http,url,

    runServerHeaders:(link) =>{
        let port = 4242
            
            http.createServer((req,response)=>{
            response.writeHead(200)   
            
            console.log("My request headers dump : \n")
            console.log(req.headers)
            response.write("done")
                response.end()
           }).listen(port,()=>{
            console.log("Server is running at port " +port)
        })

    }
}