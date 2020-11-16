const http = require('http')
const url = require('url')
module.exports = {
    http,url,

    runServerInfos:(link) =>{
        if(process.argv[2] !== undefined)
        link = 'http://'+process.argv[2]
        
        else {
            console.log('url error')
            process.exit(0)
        }
           console.log(link)
          
            
            let url_parts = url.parse(link, true);
            let port = url_parts.port
            let query = url_parts.query;
           
            
            http.createServer((req,response)=>{
            response.writeHead(200)   
            console.log("There are " +Object.keys(query).length+" parameters \n"+JSON.stringify(query))
                response.write("done")
                response.end()
           }).listen(port,()=>{
            console.log("Server is running at port " +port)
        })

    }
}