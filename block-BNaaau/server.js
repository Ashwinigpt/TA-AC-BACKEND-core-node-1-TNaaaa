var http = require('http');
var server = http.createServer(handleRequest);
function handleRequest(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h2>posted for first time</h2>`);
}
server.listen(5050, () =>{
  console.log('server listening on port 5050');
})