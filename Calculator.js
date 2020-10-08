const _ = require('lodash');
module.exports = class Calculator {
    constructor(args) {
        this.tab = _.filter(args,_.isNumber)
    }

    sum(){
        console.log(_.reduce(this.tab,function(sum, n) {return sum + n;}));
    }
    subtract(){
        console.log(_.reduce(this.tab,function(subtract, n) {return subtract - n;},0));
    }
}
