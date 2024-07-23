import { connect } from "mongoose";
//import { createUsers } from "./services/userServices";
//import { createRooms } from "./services/roomServices";
//import { createContacts } from './services/contactServices';
//import { createBookings } from "./services/bookingServices";
import { faker } from "@faker-js/faker"
import { Icontact, Iroom, Iuser, Ibooking } from "./types/global";



run().catch(err => console.log(err));

export async function run() {

    try {
        await connect('mongodb://localhost:27017/test');
        //createUsers(multipleUsers);
        //createRooms(multipleRooms);
        //createContacts(multipleContact)
        //createBookings(multipleBooking)
    } catch (error) {
        console.error('Error in run function:', error);
    }

}


export function createRandomUser(): Iuser {
    return {
        foto: faker.image.avatar(),
        name: faker.person.fullName(),
        startDate: faker.date.month(),
        description: faker.lorem.lines(),
        email: faker.internet.email(),
        contact: faker.phone.number(),
        status: faker.helpers.arrayElement(['INACTIVE', 'ACTIVE']),
    };
}

export const multipleUsers = faker.helpers.multiple(createRandomUser, {
    count: 10,
});

export function createRandomRoom(): Iroom {
    return {
        Foto: faker.image.avatar(),
        number: faker.string.binary(),
        BedType: faker.word.words(),
        Amenities: faker.helpers.arrayElements(["TV", "WiFi", "Baño privado", "Aire acondicionado", "Minibar"]),
        Rate: faker.number.int({ min: 10, max: 100 }),
        OfferPrice: faker.number.int({ min: 10, max: 100 }),
        Status: faker.helpers.arrayElement(['Booked', 'Available']),
        RoomFloor: "Floor A-1",
    };
}

export const multipleRooms = faker.helpers.multiple(createRandomRoom, {
    count: 10,
});

export function createRandomContact(): Icontact {
    return {
        date: faker.date.month(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        asunto: faker.word.words(),
        comment: faker.lorem.paragraph(),

    };
}

export const multipleContact = faker.helpers.multiple(createRandomContact, {
    count: 10,
});

export function createRandomBooking(): Ibooking {
    return {
        Name: faker.person.fullName(),
        OrderDate: faker.date.weekday(),
        CheckIn: faker.date.weekday(),
        CheckOut: faker.date.weekday(),
        SpecialRequest: faker.word.words(2),
        RoomType: faker.word.words(2),
        RoomNumber: faker.string.numeric(3),
        Status: faker.helpers.arrayElement(['in progress', 'checkin', 'checkout']),


    };
}

export const multipleBooking = faker.helpers.multiple(createRandomBooking, {
    count: 10,
});
