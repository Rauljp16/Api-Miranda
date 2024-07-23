import BookingModel from '../models/bookingModel';
import { Ibooking } from '../types/global';
import mongoose from 'mongoose';
//import dataBookings from "../data/bookings.json"
//const bookings: DataBookings[] = dataBookings


export const allBookings = async (): Promise<Ibooking[]> => {
    const allBookings = await BookingModel.find()
    console.log(allBookings);
    return allBookings;
};

export const bookingById = async (id: string): Promise<Ibooking | undefined> => {
    const booking = await BookingModel.findById(id)
    if (!booking) {
        throw new Error("Cannont find bookings")
    }

    return booking
};

export const createBooking = (booking: Ibooking | Ibooking[]) => {
    const newBooking = new BookingModel(booking)
    newBooking.save()
}

export const createBookings = async (bookings: Ibooking[]): Promise<Ibooking[]> => {
    const createdBookings = await BookingModel.insertMany(bookings);
    return createdBookings;
};

export const updateBooking = async (id: string, body: Partial<Ibooking>): Promise<Ibooking | null> => {
    const objectId = new mongoose.Types.ObjectId(id);

    await BookingModel.updateOne({ _id: objectId }, body);

    const updatedBooking = await BookingModel.findById(objectId);
    return updatedBooking;
};

export const deleteBooking = async (id: string): Promise<Ibooking | null> => {
    const objectId = new mongoose.Types.ObjectId(id);
    const delBooking = await BookingModel.findByIdAndDelete(objectId)
    return delBooking
}

