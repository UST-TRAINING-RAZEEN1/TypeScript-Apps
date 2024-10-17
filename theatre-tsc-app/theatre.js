var Theatre = /** @class */ (function () {
    function Theatre(name, rows, columns) {
        this.name = name;
        this.seats = Array.from({ length: rows }, function () { return Array(columns).fill('_'); });
    }
    Theatre.prototype.displaySeatingArrangement = function () {
        console.log("Seating Arrangement:");
        var header = "   ";
        for (var seatIndex = 1; seatIndex <= this.seats[0].length; seatIndex++) {
            header += "".concat(seatIndex, " ");
        }
        console.log(header);
        for (var rowIndex = 0; rowIndex < this.seats.length; rowIndex++) {
            var row = String.fromCharCode(65 + rowIndex) + " ";
            row += this.seats[rowIndex].join(' ') + " ";
            console.log(row);
        }
    };
    Theatre.prototype.bookSeat = function (row, number) {
        if (this.isSeatAvailable(row, number)) {
            this.seats[row - 1][number - 1] = 'B';
            console.log("Seat booked: Row ".concat(String.fromCharCode(64 + row), ", Seat ").concat(number));
        }
        else {
            console.log("Seat Row ".concat(String.fromCharCode(64 + row), ", Seat ").concat(number, " is already booked."));
        }
    };
    Theatre.prototype.isSeatAvailable = function (row, number) {
        return this.seats[row - 1][number - 1] === '_';
    };
    Theatre.prototype.cancelSeat = function (row, number) {
        if (this.isSeatBooked(row, number)) {
            this.seats[row - 1][number - 1] = '_';
            console.log("Booking cancelled: Row ".concat(String.fromCharCode(64 + row), ", Seat ").concat(number));
        }
        else {
            console.log("Seat Row ".concat(String.fromCharCode(64 + row), ", Seat ").concat(number, " was not booked."));
        }
    };
    Theatre.prototype.isSeatBooked = function (row, number) {
        return this.seats[row - 1][number - 1] === 'B';
    };
    return Theatre;
}());
var theatre = new Theatre("The Grand Theatre", 10, 10);
theatre.displaySeatingArrangement();
theatre.bookSeat(1, 1);
theatre.bookSeat(1, 2);
theatre.bookSeat(4, 6);
theatre.displaySeatingArrangement();
theatre.cancelSeat(1, 2);
theatre.displaySeatingArrangement();
theatre.bookSeat(1, 2);
theatre.displaySeatingArrangement();
