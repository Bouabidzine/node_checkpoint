

const fs = require('fs');


fs.writeFile('welcome.txt', 'Hello My first Node', err =>
{
    if (err) {console.error(err);
return;}
console.log('File created succefully!')});