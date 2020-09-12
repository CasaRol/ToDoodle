const express = require('express');
const fs = require('fs');
var http = require('http');
var server = http.createServer();

server.POST('/savedata', (req, res) => {
    let array = req.body.array;

    fs.writeFileSync("todo.json", array);

    res.end();
});

let port = 8080
server.listen(port);
console.log('server is litening on port ' + port);