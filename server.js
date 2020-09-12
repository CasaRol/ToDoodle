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
    console.log(req.body.array);
    let array = req.body.array;

    fs.writeFileSync("todo.json", JSON.stringify(array));

    res.write(200, "OK");
    res.send();
    res.end();
});

let port = 8080
server.listen(port);
console.log('server is litening on port ' + port);