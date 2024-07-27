"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleBooking = exports.createRandomBooking = exports.multipleContact = exports.createRandomContact = exports.multipleRooms = exports.createRandomRoom = exports.multipleUsers = exports.createRandomUser = exports.run = void 0;
const userServices_1 = require("./services/userServices");
//import { createUsers } from "./services/userServices";
// import { createRooms } from "./services/roomServices";
// import { createContacts } from './services/contactServices';
// import { createBookings } from "./services/bookingServices";
const faker_1 = require("@faker-js/faker");
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
run().catch(err => console.log(err));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.MONGO_URL);
            const user = createRandomUser();
            (0, userServices_1.createUser)(user);
            //createUsers(multipleUsers);
            //createRooms(multipleRooms);
            //createContacts(multipleContact)
            //createBookings(multipleBooking)
        }
        catch (error) {
            console.error('Error in run function:', error);
        }
    });
}
exports.run = run;
function createRandomUser() {
    return {
        foto: faker_1.faker.image.avatar(),
        name: faker_1.faker.person.fullName(),
        startDate: faker_1.faker.date.month(),
        description: faker_1.faker.lorem.lines(),
        email: faker_1.faker.internet.email(),
        contact: faker_1.faker.phone.number(),
        status: faker_1.faker.helpers.arrayElement(['INACTIVE', 'ACTIVE']),
        password: faker_1.faker.internet.password(),
    };
}
exports.createRandomUser = createRandomUser;
exports.multipleUsers = faker_1.faker.helpers.multiple(createRandomUser, {
    count: 10,
});
function createRandomRoom() {
    return {
        Foto: faker_1.faker.image.avatar(),
        number: faker_1.faker.string.binary(),
        BedType: faker_1.faker.word.words(),
        Amenities: faker_1.faker.helpers.arrayElements(["TV", "WiFi", "Baño privado", "Aire acondicionado", "Minibar"]),
        Rate: faker_1.faker.number.int({ min: 10, max: 100 }),
        OfferPrice: faker_1.faker.number.int({ min: 10, max: 100 }),
        Status: faker_1.faker.helpers.arrayElement(['Booked', 'Available']),
        RoomFloor: "Floor A-1",
    };
}
exports.createRandomRoom = createRandomRoom;
exports.multipleRooms = faker_1.faker.helpers.multiple(createRandomRoom, {
    count: 10,
});
function createRandomContact() {
    return {
        date: faker_1.faker.date.month(),
        name: faker_1.faker.person.fullName(),
        email: faker_1.faker.internet.email(),
        phone: faker_1.faker.phone.number(),
        asunto: faker_1.faker.word.words(),
        comment: faker_1.faker.lorem.paragraph(),
    };
}
exports.createRandomContact = createRandomContact;
exports.multipleContact = faker_1.faker.helpers.multiple(createRandomContact, {
    count: 10,
});
function createRandomBooking() {
    return {
        Name: faker_1.faker.person.fullName(),
        OrderDate: faker_1.faker.date.weekday(),
        CheckIn: faker_1.faker.date.weekday(),
        CheckOut: faker_1.faker.date.weekday(),
        SpecialRequest: faker_1.faker.word.words(2),
        RoomType: faker_1.faker.word.words(2),
        RoomNumber: faker_1.faker.string.numeric(3),
        Status: faker_1.faker.helpers.arrayElement(['in progress', 'checkin', 'checkout']),
    };
}
exports.createRandomBooking = createRandomBooking;
exports.multipleBooking = faker_1.faker.helpers.multiple(createRandomBooking, {
    count: 10,
});
