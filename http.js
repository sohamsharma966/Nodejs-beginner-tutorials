const http = require("http");

const port=process.env.PORT || 3000;

const server=http.createServer(function(req,res){
    res.statusCode=200; //to tell client request was successful/server error/page not found.
    res.setHeader=('Content-type','Text/html') //to tell client what type of content we are sending on your request.
    res.end("<h1> this is code with harry </h1>") //what are you sending in response, CODE //OR use fs.readFileSync("fsh.html");
})

//this server willnot work until we listen.

server.listen(port,function(){
    console.log("server is listening");
})
