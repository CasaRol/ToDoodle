const fs = require('fs');

function saveToDo(task) {
    'use strict'
    
    let data = JSON.stringify(task);
    
    fs.writeFileSync('file.json', data, finished);
}