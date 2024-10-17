class Room {
    id: number;
    type: string;
    pricePerNight: number;
    available: boolean;

    constructor(id: number, type: string, pricePerNight: number) {
        this.id = id;
        this.type = type;
        this.pricePerNight = pricePerNight;
        this.available = true; // By default, a room is available
    }
}

class Hotel {
    name: string;
    rooms: Room[];

    constructor(name: string) {
        this.name = name;
        this.rooms = [];
    }

    addRoom(room: Room): void {
        this.rooms.push(room);
    }

    checkAvailability(): Room[] {
        return this.rooms.filter(room => room.available);
    }

    bookRoom(roomId: number, nights: number): string {
        const room = this.rooms.find(r => r.id === roomId);
        if (room) {
            if (room.available) {
                room.available = false;
                const totalCost = this.calculateTotalCost(room.pricePerNight, nights);
                return `Room booked! Total cost for ${nights} nights is Rs:${totalCost}.`;
            } else {
                return `Room ${roomId} is not available.`;
            }
        } else {
            return `Room ${roomId} not found.`;
        }
    }

    calculateTotalCost(pricePerNight: number, nights: number): number {
        return pricePerNight * nights;
    }

    returnRoom(roomId: number): string {
        const room = this.rooms.find(r => r.id === roomId);
        if (room) {
            if (!room.available) {
                room.available = true;
                return `Room ${roomId} is now available.`;
            } else {
                return `Room ${roomId} was not booked.`;
            }
        } else {
            return `Room ${roomId} not found.`;
        }
    }
}


const hotel = new Hotel("Seaside Resort");
hotel.addRoom(new Room(1, "Single", 100));
hotel.addRoom(new Room(2, "Double", 150));
hotel.addRoom(new Room(3, "Suite", 250));

console.log("Available Rooms:", hotel.checkAvailability());

const bookingMessage = hotel.bookRoom(1, 3);
console.log(bookingMessage); // Book a single room for 3 nights

console.log("Available Rooms after booking:", hotel.checkAvailability());

const returnMessage = hotel.returnRoom(1);
console.log(returnMessage); // Return the room

console.log("Available Rooms after return:", hotel.checkAvailability());
