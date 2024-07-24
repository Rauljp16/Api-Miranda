import { Iuser } from '../types/global';
//import dataUsers from "../data/users.json"
import UserModel from '../models/userModel';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

//const users: DataUsers[] = dataUsers

export const allUsers = async (): Promise<Iuser[]> => {
    const allUsers = await UserModel.find()
    // console.log(allUsers);
    return allUsers;
};

export const userById = async (id: string): Promise<Iuser | undefined> => {
    const user = await UserModel.findById(id)
    if (!user) {
        throw new Error("Cannont find users")
    }

    return user
};

export const createUser = async (user: Iuser) => {
    console.log(user.password);
    const hasPassword = await bcrypt.hash(user.password, 10)
    const newUser = new UserModel({ ...user, password: hasPassword })
    newUser.save()
}

export const createUsers = async (users: Iuser[]): Promise<Iuser[]> => {
    const hashedUsers = await Promise.all(users.map(async user => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return { ...user, password: hashedPassword };
    }));
    const createdUsers = await UserModel.insertMany(hashedUsers);
    return createdUsers;
};

export const updateUser = async (id: string, body: Partial<Iuser>): Promise<Iuser | null> => {
    const objectId = new mongoose.Types.ObjectId(id);

    await UserModel.updateOne({ _id: objectId }, body);

    const updatedUser = await UserModel.findById(objectId);
    return updatedUser;
};

export const deleteUser = async (id: string): Promise<Iuser | null> => {
    const objectId = new mongoose.Types.ObjectId(id);
    const delUser = await UserModel.findByIdAndDelete(objectId)
    return delUser
}