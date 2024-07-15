import { DataBookings } from '../types/global';
import dataBookings from "../data/bookings.json"

const bookings: DataBookings[] = dataBookings

export const allBookings = (): DataBookings[] => {
    return bookings;
};
export const bookingById = (id: string): DataBookings | undefined => {
    return bookings.find(booking => booking.id === id);
};