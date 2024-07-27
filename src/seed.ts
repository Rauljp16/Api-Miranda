//import { createUsers } from "./services/userServices";
// import { createRooms } from "./services/roomServices";
// import { createContacts } from "./services/contactServices";
// import { createBookings } from "./services/bookingServices";
import { faker } from "@faker-js/faker";
import { Icontact, Iroom, Iuser, Ibooking } from "./types/global";
import mongoose from "mongoose";
import "dotenv/config";

run().catch((err) => console.log(err));

export async function run() {
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
        //createUsers(createRandomUsers(1));
        // createRooms(createRandomRoom(2));
        // createContacts(createRandomContact(2));
        // createBookings(createRandomBooking(2));
    } catch (error) {
        console.error("Error in run function:", error);
    }
}

export function createRandomUsers(count: number): Iuser[] {
    const userGenerator = (): Iuser => ({
        foto: faker.image.avatar(),
        name: faker.person.fullName(),
        startDate: faker.date.month(),
        description: faker.lorem.lines(),
        email: faker.internet.email(),
        contact: faker.phone.number(),
        status: faker.helpers.arrayElement(["INACTIVE", "ACTIVE"]),
        password: faker.internet.password(),
    });

    const users: Iuser[] = Array.from({ length: count }, userGenerator);

    return users;
}

export function createRandomRoom(count: number): Iroom[] {
    const userGenerator = (): Iroom => ({
        Foto: faker.image.avatar(),
        number: faker.string.binary(),
        BedType: faker.word.words(),
        Amenities: faker.helpers.arrayElements([
            "TV",
            "WiFi",
            "Baño privado",
            "Aire acondicionado",
            "Minibar",
        ]),
        Rate: faker.number.int({ min: 10, max: 100 }),
        OfferPrice: faker.number.int({ min: 10, max: 100 }),
        Status: faker.helpers.arrayElement(["Booked", "Available"]),
        RoomFloor: "Floor A-1",
    });
    const rooms: Iroom[] = Array.from({ length: count }, userGenerator);

    return rooms;
}

export function createRandomContact(count: number): Icontact[] {
    const userGenerator = (): Icontact => ({
        date: faker.date.month(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        asunto: faker.word.words(),
        comment: faker.lorem.paragraph(),
    });
    const contacts: Icontact[] = Array.from({ length: count }, userGenerator);

    return contacts;
}

export function createRandomBooking(count: number): Ibooking[] {
    const userGenerator = (): Ibooking => ({
        Name: faker.person.fullName(),
        OrderDate: faker.date.weekday(),
        CheckIn: faker.date.weekday(),
        CheckOut: faker.date.weekday(),
        SpecialRequest: faker.word.words(2),
        RoomType: faker.word.words(2),
        RoomNumber: faker.string.numeric(3),
        Status: faker.helpers.arrayElement(["in progress", "checkin", "checkout"]),
    });
    const bookings: Ibooking[] = Array.from({ length: count }, userGenerator);

    return bookings;
}
