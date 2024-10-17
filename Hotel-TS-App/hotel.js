var Room = /** @class */ (function () {
    function Room(id, type, pricePerNight) {
        this.id = id;
        this.type = type;
        this.pricePerNight = pricePerNight;
        this.available = true; // By default, a room is available
    }
    return Room;
}());
var Hotel = /** @class */ (function () {
    function Hotel(name) {
        this.name = name;
        this.rooms = [];
    }
    Hotel.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    Hotel.prototype.checkAvailability = function () {
        return this.rooms.filter(function (room) { return room.available; });
    };
    Hotel.prototype.bookRoom = function (roomId, nights) {
        var room = this.rooms.find(function (r) { return r.id === roomId; });
        if (room) {
            if (room.available) {
                room.available = false;
                var totalCost = this.calculateTotalCost(room.pricePerNight, nights);
                return "Room booked! Total cost for ".concat(nights, " nights is Rs:").concat(totalCost, ".");
            }
            else {
                return "Room ".concat(roomId, " is not available.");
            }
        }
        else {
            return "Room ".concat(roomId, " not found.");
        }
    };
    Hotel.prototype.calculateTotalCost = function (pricePerNight, nights) {
        return pricePerNight * nights;
    };
    Hotel.prototype.returnRoom = function (roomId) {
        var room = this.rooms.find(function (r) { return r.id === roomId; });
        if (room) {
            if (!room.available) {
                room.available = true;
                return "Room ".concat(roomId, " is now available.");
            }
            else {
                return "Room ".concat(roomId, " was not booked.");
            }
        }
        else {
            return "Room ".concat(roomId, " not found.");
        }
    };
    return Hotel;
}());
var hotel = new Hotel("Seaside Resort");
hotel.addRoom(new Room(1, "Single", 100));
hotel.addRoom(new Room(2, "Double", 150));
hotel.addRoom(new Room(3, "Suite", 250));
console.log("Available Rooms:", hotel.checkAvailability());
var bookingMessage = hotel.bookRoom(1, 3);
console.log(bookingMessage); // Book a single room for 3 nights
console.log("Available Rooms after booking:", hotel.checkAvailability());
var returnMessage = hotel.returnRoom(1);
console.log(returnMessage); // Return the room
console.log("Available Rooms after return:", hotel.checkAvailability());
