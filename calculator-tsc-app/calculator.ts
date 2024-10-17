class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    }




}

const calculator = new Calculator();

console.log(`Add: ${calculator.add(5, 3)}`);
console.log(`Subtract: ${calculator.subtract(5, 3)}`);
console.log(`Multiply: ${calculator.multiply(5, 3)}`);
console.log(`Divide: ${calculator.divide(5, 0)}`);
console.log(`Divide: ${calculator.divide(25, 10)}`);


