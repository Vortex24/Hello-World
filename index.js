const http = require("http");                                // requiring in-built HTTP module

const server = http.createServer((req, res) => {             // creating HTTP server
    res.write("Hello World!!");
    res.end();
});

server.listen(process.env.PORT || 3000, () => {                                  // Setting up server at port 3000
    console.log("Server is up and running on port 3000");
});
