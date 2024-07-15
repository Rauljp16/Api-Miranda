import { DataRooms } from '../types/global';
import dataRooms from "../data/rooms.json"

const rooms: DataRooms[] = dataRooms

export const allRooms = (): DataRooms[] => {
    return rooms;
};
export const roomById = (id: string): DataRooms | undefined => {
    return rooms.find(room => room.id === id);
};