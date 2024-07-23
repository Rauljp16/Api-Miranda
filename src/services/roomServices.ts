import { Iroom } from '../types/global';
import RoomModel from '../models/roomModel';
import mongoose from 'mongoose';
//import dataRooms from "../data/rooms.json"
//const rooms: DataRooms[] = dataRooms

export const allRooms = async (): Promise<Iroom[]> => {
    const allRooms = await RoomModel.find()
    console.log(allRooms);
    return allRooms;
};

export const roomById = async (id: string): Promise<Iroom | undefined> => {
    const room = await RoomModel.findById(id)
    if (!room) {
        throw new Error("Cannont find rooms")
    }

    return room
};

export const createRoom = (room: Iroom | Iroom[]) => {
    const newRoom = new RoomModel(room)
    newRoom.save()
}

export const createRooms = async (rooms: Iroom[]): Promise<Iroom[]> => {
    const createdRooms = await RoomModel.insertMany(rooms);
    return createdRooms;
};

export const updateRoom = async (id: string, body: Partial<Iroom>): Promise<Iroom | null> => {
    const objectId = new mongoose.Types.ObjectId(id);

    await RoomModel.updateOne({ _id: objectId }, body);

    const updatedRoom = await RoomModel.findById(objectId);
    return updatedRoom;
};

export const deleteRoom = async (id: string): Promise<Iroom | null> => {
    const objectId = new mongoose.Types.ObjectId(id);
    const delRoom = await RoomModel.findByIdAndDelete(objectId)
    return delRoom
}