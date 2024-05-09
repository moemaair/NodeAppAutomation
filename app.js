const express = require('express');
const app = express();
const path = require('path);
                     
app.get('/', (request, response) => {
 response.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/about', (request, response) => {
 response.sendFile(path.join(__dirname+'/about.html'));
});

app.listen(8081, () => {
 console.log(`Server is up on localhost:${PORT}`);
});
