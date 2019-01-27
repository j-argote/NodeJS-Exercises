//add callback function
function add(x, y, resultFunction){
    var result = x + y;
    resultFunction(result);
}

function resultfun(result){
    console.log(result);

}
//adds 1 and 2 and displays the result through resultfun
add(1, 2, resultfun)


//subraction call back function
function subtract(x, y, resultFunc){
    var result = x - y;
    resultFunc(result);
}

function result(result){
    console.log(result);
}

subtract(3, 1, result)


//greeting call back function
function greeting(person, greetFunc){
    var result = `Hola, ${person}!`;
    greetFunc(result);
}

function greetFunc(result){
    console.log(result);
}

greeting('John', greetFunc)


//multiplication callback function
var num = [2, 3];

function product(numbers, resultFunc){
    var result = numbers.reduce(function(a,b){
        return a * b;
    }, 1);
    resultFunc(result);
}

function resultFunc(result){
    console.log(result);
}

product(num, resultFunc)





//callback functions with delay of 1000 milliseconds
//add callback function
function add(x, y, resultFunction){
    setTimeout(function(){
        var result = x + y;
        resultFunction(result);
    }, 1000);
}

function resultfun(result){
    console.log(result);

}

add(1, 2, resultfun)


//subraction call back function
function subtract(x, y, resultFunc){
    setTimeout(()=>{
        var result = x - y;
        resultFunc(result);
    },1000);
}

function result(result){
    console.log(result);
}

subtract(3, 1, result)


//greeting call back function
function greeting(person, greetFunc){
    setTimeout(()=>{
        var result = `Hola, ${person}!`;
        greetFunc(result);
    }, 1000);
}

function greetFunc(result){
    console.log(result);
}

greeting('John', greetFunc)


//multiplication callback function
var num = [2, 3];

function product(numbers, resultFunc){
    setTimeout(()=>{
        var result = numbers.reduce(function(a,b){
            return a * b;
        }, 1);
        resultFunc(result);
    }, 1000);
};

function resultFunc(result){
    console.log(result);
};

product(num, resultFunc)