var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log("Add: ".concat(calculator.add(5, 3)));
console.log("Subtract: ".concat(calculator.subtract(5, 3)));
console.log("Multiply: ".concat(calculator.multiply(5, 3)));
console.log("Divide: ".concat(calculator.divide(5, 0)));
console.log("Divide: ".concat(calculator.divide(25, 10)));
