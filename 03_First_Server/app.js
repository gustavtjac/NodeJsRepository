"Strict mode";

///Vi importerer express.js. vi gør den const så vi kan tage fat i det.
const express = require('express');

//Laver en instans a express
const app = express();


// one-liner version
//const app = require('express')();


app.get("/", (req, res) => {

res.send({data: "Welcome to the first server!!"})
});


//Task: create a new route called snowstorm, it should respond with a warning


app.get("/snowstorms", (req, res)=>{
    res.send({warning: "A snowstorm is coming"});
});


// how can we send data in a GET request?

// path variable
app.get("/cars/:carModel/:year", (req, res) => {
console.log(req.params.carModel);
    res.send({data: " Your " + req.params.carModel + " is very nice and its from " + req.params.year + "!!!!!!!!"});
});


//En call back funktion er en funktoion der bliver brugt som argument til en anden funktion


// query string/ query parameters ?variable=xxxx

app.get("/bag", (req, res) => {
    res.send({itemsInBag: req.query });
});


//Vi sætter appen til at lytte på port 8080
app.listen(8080);

