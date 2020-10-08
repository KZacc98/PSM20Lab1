const _ = require('lodash');

function sum1(){
    let sum = 0;
    let i;
    for(i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(sum1(1,2,3))

function sum2(){
    return _.sum(arguments);
}
console.log(sum2(1,2,3))

function sum3(){
    let i;
    for(i = 0; i < arguments.length; i++){
        if(_.isNumber(arguments[i]) === false){
            console.log("Argument must be a number");
            console.log("Value: ", arguments[i], ", position: ", i)
            return;
        }
    }
    return _.sum(arguments);
}
console.log(sum3(1,2,3))
console.log(sum3(1,2,3,'text'))
const Calculator = require('./Calculator.js')

const item1 = new Calculator([1,2,3,4,5]);
const item2 = new Calculator([1,"text",3,{}]);

item1.sum()
item1.subtract()

item2.sum()
item2.subtract()


