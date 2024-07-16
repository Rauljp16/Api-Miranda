import { DataBookings } from '../types/global';
import dataBookings from "../data/bookings.json"

const bookings: DataBookings[] = dataBookings

export const allBookings = (): DataBookings[] => {
    return bookings;
};
export const bookingById = (id: string): DataBookings | undefined => {
    if (!bookings) {
        throw new Error("Cannont find booking")
    }
    return bookings.find(booking => booking.id === id);
};

//
//
//pasar a CLASS