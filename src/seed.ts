import { connect } from "mongoose";
//import { createUsers } from "./services/userServices";
import { faker } from "@faker-js/faker"
import { Iuser } from "./types/global";



run().catch(err => console.log(err));

export async function run() {

    try {
        await connect('mongodb://localhost:27017/test');
        //createUsers(multipleUsers);
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
