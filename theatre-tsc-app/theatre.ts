
class Theatre {
    name: string;
    seats: string[][]; 

    constructor(name: string, rows: number, columns: number) {
        this.name = name;
        
        this.seats = Array.from({ length: rows }, () => Array(columns).fill('_'));
    }

    
    displaySeatingArrangement(): void {
        console.log("Seating Arrangement:");

        
        let header = "   ";
        for (let seatIndex = 1; seatIndex <= this.seats[0].length; seatIndex++) {
            header += `${seatIndex} `;
        }
        console.log(header);

        
        for (let rowIndex = 0; rowIndex < this.seats.length; rowIndex++) {
            let row = String.fromCharCode(65 + rowIndex) + " "; 
            row += this.seats[rowIndex].join(' ') + " ";
            console.log(row);
        }
    }

    
    bookSeat(row: number, number: number): void {
        if (this.isSeatAvailable(row, number)) {
            this.seats[row - 1][number - 1] = 'B'; 
            console.log(`Seat booked: Row ${String.fromCharCode(64 + row)}, Seat ${number}`);
        } else {
            console.log(`Seat Row ${String.fromCharCode(64 + row)}, Seat ${number} is already booked.`);
        }
    }

    
    private isSeatAvailable(row: number, number: number): boolean {
        return this.seats[row - 1][number - 1] === '_'; 
    }

    
    cancelSeat(row: number, number: number): void {
        if (this.isSeatBooked(row, number)) {
            this.seats[row - 1][number - 1] = '_'; 
            console.log(`Booking cancelled: Row ${String.fromCharCode(64 + row)}, Seat ${number}`);
        } else {
            console.log(`Seat Row ${String.fromCharCode(64 + row)}, Seat ${number} was not booked.`);
        }
    }

    
    private isSeatBooked(row: number, number: number): boolean {
        return this.seats[row - 1][number - 1] === 'B'; 
    }
}


const theatre = new Theatre("The Grand Theatre", 10, 10); 

theatre.displaySeatingArrangement(); 


theatre.bookSeat(1, 1);
theatre.bookSeat(1, 2);
theatre.bookSeat(4, 6); 


theatre.displaySeatingArrangement();


theatre.cancelSeat(1, 2);



theatre.displaySeatingArrangement();
theatre.bookSeat(1, 2);
theatre.displaySeatingArrangement();
