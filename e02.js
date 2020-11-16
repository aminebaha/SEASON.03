const http = require('http')

module.exports = {
    http,

    runServerGETorPOST:(port) =>{
        if( process.argv[2] === undefined)
            console.log('usage : node main.js <PORT>')
        if(port === undefined)
            port = process.argv[2]

        let server = http.createServer((req,response)=>{
            response.writeHead(200)

            // Ici pas de else if dans le case ou il y aurait une autre méthode que GET ou POST et pour éviter le else
            if(req.method==='POST'){
             response.write('Heseinberg')
            }
            if(req.method==='GET') {
                response.write('<h1>Hello World<h1>') 

            }
          response.end()
        })
        server.listen(port,()=>{
            console.log("Server is running at port " +port)
        })
   
        
    
    
    }
}