import { DataUsers } from '../types/global';
import dataUsers from "../data/users.json"

const users: DataUsers[] = dataUsers

export const allUsers = (): DataUsers[] => {
    return users;
};
export const userById = (id: string): DataUsers | undefined => {
    const user = users.find(user => user.id === id);
    if (!users) {
        throw new Error("Cannont find users")
    }

    return user
};