const fs = require('fs');
const filePath  = 'task02.txt'
const string =  'Hello, World!'

fs.appendFile(filePath, string + '\n', (err) =>{
    if (err){
        console.error('Error!');
    }
    console.log('Done!');
} );