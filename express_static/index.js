const express = require('express');
const port = 3000;
const app = express();




app.use(express.static('public'));

<img src ='/img/logo.png'></img>

//app.get('/img/logo.png/', (req, res,next) => {
    //req.params;
    //res.send('image affichée');

//});


app.listen(port, () => {
  console.log('Server started on port: ' + port);
});