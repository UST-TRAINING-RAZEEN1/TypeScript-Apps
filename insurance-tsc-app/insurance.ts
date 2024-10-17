

class InsuranceCalculator {
    private basePremium: number;

    constructor(basePremium: number) {
        this.basePremium = basePremium;
    }

    calculatePremium(age: number, type: String): number {
        let ageFactor = this.getAgeFactor(age);
        let typeFactor = this.getTypeFactor(type);
        return this.basePremium * ageFactor * typeFactor;
    }

    private getAgeFactor(age: number): number {
        if (age < 18) {
            return 1.0;
        } else if (age >= 18 && age < 35) {
            return 1.5;
        } else if (age >= 35 && age < 50) {
            return 2.0;
        } else {
            return 1.5;
        }
    }

    private getTypeFactor(type: String): number {
        switch (type) {
            case "Health":
                return 1.0;
            case "life":
                return 1.3;
            case "vehicle":
                return 1.5;
            default:
                return 1.0;
        }
    }
}


const calculator = new InsuranceCalculator(1000);
const age = 30;
const type = "Health";

const premium = calculator.calculatePremium(age, type);
console.log(`The insurance premium for a ${age}-year-old with ${type} insurance is: RS:${premium}`);

const age2 = 70;
const type2 = "vehicle";

const premium2 = calculator.calculatePremium(age2, type2);
console.log(`The insurance premium for a ${age2}-year-old with ${type2} insurance is: RS:${premium2}`);
