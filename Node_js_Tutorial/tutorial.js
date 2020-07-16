const sum = (num1, num2) => num1 + num2;
const PI = 3.142;

class MathObj {
    constructor() {
        console.log('object created');
    }
}
/*module.exports.sum = sum;
module.exports.PI = PI;
module.exports.MathObj = MathObj;*/

module.exports = {sum:sum, PI:PI, MathObj:MathObj};