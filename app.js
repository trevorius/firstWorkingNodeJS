const express = require('express')
const app = express()
const morgan = require('morgan')

const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({extended: false})) //middleware to process request easier

app.use(express.static('./public'))//allows public .html to work

app.use(morgan('short')) //combined or short options
app.use(cors())//enables all cors requests

app.get("/", (req,res) => {
    console.log("Responding to root route")
    res.send('Hello from RgrfergergerOOOT!')
})
//recieves the post
app.post('/htmldata', (req, res) => {
    
    const apartments = parseInt(req.body.apartments);
    const recievedVar2 = parseInt(req.body.var2);
    
    console.log(apartments*51);
    const calcul = (apartments*51);
    const sommeC = apartments+recievedVar2;


    //sends the result of calcul
    res.status(200).send({ result: calcul, somme: sommeC });
    res.end()
})

app.get("/data", (req,res) => {
    var form1 = {type: "Residentiel", numberApartments: "500" }
    res.json(form1)

})


// PORT

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening on port " + port + " ...");
});