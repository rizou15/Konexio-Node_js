// Import et instanciation
const express = require('express');
const port = 3000;

const app = express();


// exercice 0
app.get('/', (req, res) => {
    console.log(req);
  res.send('Authors API');
});

// exercice 1

const authors = [];

app.get('/authors/1/', (req, res,next) => {
    console.log(req);
    res.send('Lawrence Nowell , UK');
    next();
});
app.get('/authors/2/', (req, res,next) => {
    console.log(req);
    res.send('William Shakespeare, UK');
    next();
});
app.get('/authors/3/', (req, res, next) => {
    console.log(req);
    res.send('Charles Dickens, US');
    next();
});
app.get('/authors/4', (req, res) =>{
    console.log(req);
    res.send('Oscar Wilde , UK');
});
app.get('*', (req, res) => {
    console.log(req);
    res.send('All routes',[authors]);
});

// Run server
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});


// méthode de l'array à revoir pour plus de clarté du code