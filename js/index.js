

// "test": "echo \"Error: no test specified\" && exit 1"


const express = require('express');

const app = express();


app.use('*', (req,res) => {
    console.log('had request from browser');
    res.send(`<html><body><h1>Hello World</h1></body></html>`);

})
const listener = app.listen(3000, () => console.log(`Example app listening on port ${listener.address().port}!`));

