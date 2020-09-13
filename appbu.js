const express = require('express');
const app = express();
const morgan = require ('morgan');
const mysql = require ('mysql')


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('./public'));
app.use(morgan('short'));


app.post('/nbrs', (req,res) => {
 console.log("trying to save 2 numbers");

const nbr1 = parseInt(req.body.nbr1) ; 
const nbr2 = parseInt(req.body.nbr2) ; 
let result = nbr1 * nbr2;

    console.log( "nbr1: " + nbr1 );
    console.log( "nbr2: " + nbr2 );
    console.log( "nbr1 x nbr2 = " + result + "      " + nbr1+nbr2)
    

 res.end();
});








// PORT

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening on port " + port + " ...");
});