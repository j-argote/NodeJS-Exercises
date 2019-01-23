//npm install express --save
//npm install date-and-time --save


var express = require('express');
var date = require('date-and-time')
var app = express();

//displays "Hello, world!" on root url
app.get('/', (req, res)=>{
    res.send('Hello, world!');
});

//add cats route
app.get('/cats', (req, res)=>{
    res.send('Meow');
});

//add dogs route
app.get('/dogs', (req, res)=>{
    res.send('Woof');
});

//add cats_and_dogs route
app.get('/cats_and_dogs', (req, res)=>{
    res.send('Living together');
});

//adds dynamic route parameter
app.get('/greet/:name', (req, res)=>{
    res.send(`Hello, ${req.params.name}!`);
});

//requires name and age as queries and will give back year you were born
app.get('/hello1', (req, res)=>{
    var name = req.query.name || 'world';
    var age = req.query.age;
    var year = date.format(new Date(), 'YYYY');
    var yearBorn = year - age;

    if (!age){
        res.send(`Hello ${name}!`);
    }
    else{
        res.send(`Hello ${name}. You were born in ${yearBorn}.`)
    }
});



app.listen(3000);
