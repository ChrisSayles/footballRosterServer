var http = require("http");
var fs = require("fs");
var url = require("url");


// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {

    // Depending on the URL we display a different HTML file.
    case "/":
      fs.readFile("index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    case "/MichiganQB":
      fs.readFile("MichiganQB.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    case "/MichiganRB":
      fs.readFile("MichiganRB.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    case "/MichiganWR":
      fs.readFile("MichiganWR.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
      case "/MichiganOL":
      fs.readFile("MichiganOL.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    default:
      fs.readFile("index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
  }
}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s" + PORT);
});