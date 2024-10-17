var InsuranceCalculator = /** @class */ (function () {
    function InsuranceCalculator(basePremium) {
        this.basePremium = basePremium;
    }
    InsuranceCalculator.prototype.calculatePremium = function (age, type) {
        var ageFactor = this.getAgeFactor(age);
        var typeFactor = this.getTypeFactor(type);
        return this.basePremium * ageFactor * typeFactor;
    };
    InsuranceCalculator.prototype.getAgeFactor = function (age) {
        if (age < 18) {
            return 1.0;
        }
        else if (age >= 18 && age < 35) {
            return 1.5;
        }
        else if (age >= 35 && age < 50) {
            return 2.0;
        }
        else {
            return 1.5;
        }
    };
    InsuranceCalculator.prototype.getTypeFactor = function (type) {
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
    };
    return InsuranceCalculator;
}());
var calculator = new InsuranceCalculator(1000);
var age = 30;
var type = "Health";
var premium = calculator.calculatePremium(age, type);
console.log("The insurance premium for a ".concat(age, "-year-old with ").concat(type, " insurance is: RS:").concat(premium));
var age2 = 70;
var type2 = "vehicle";
var premium2 = calculator.calculatePremium(age2, type2);
console.log("The insurance premium for a ".concat(age2, "-year-old with ").concat(type2, " insurance is: RS:").concat(premium2));
