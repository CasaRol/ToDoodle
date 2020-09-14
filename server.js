const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());
server.options('*', cors());

server.post('/savedata', (req, res) => {

    fs.writeFileSync("todo.json", req.body.tmpArray);

    res.write("OK", 200);
    res.send();
    res.end();
});

server.get('/ping', (req, res) => {
    res.write('OK', 200);
    res.send();
    res.end();
})

let port = 8080
server.listen(port);
console.log('server is litening on port ' + port);