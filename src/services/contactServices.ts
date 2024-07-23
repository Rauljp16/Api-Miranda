import { Icontact } from "../types/global";
//import dataContact from "../data/contacts.json"
//const contacts: DataContacts[] = dataContact
import ContactModel from "../models/contactModel";
import mongoose from "mongoose";


export const allContact = async (): Promise<Icontact[]> => {
    const allContact = await ContactModel.find()
    console.log(allContact);
    return allContact;
};

export const contactById = async (id: string): Promise<Icontact | undefined> => {
    const contact = await ContactModel.findById(id)
    if (!contact) {
        throw new Error("Cannont find contact")
    }

    return contact
};

export const createContact = (contact: Icontact | Icontact[]) => {
    const newContact = new ContactModel(contact)
    newContact.save()
}

export const createContacts = async (contacts: Icontact[]): Promise<Icontact[]> => {
    const createdContacts = await ContactModel.insertMany(contacts);
    return createdContacts;
};

export const updateContact = async (id: string, body: Partial<Icontact>): Promise<Icontact | null> => {
    const objectId = new mongoose.Types.ObjectId(id);

    await ContactModel.updateOne({ _id: objectId }, body);

    const updatedContact = await ContactModel.findById(objectId);
    return updatedContact;
};

export const deleteContact = async (id: string): Promise<Icontact | null> => {
    const objectId = new mongoose.Types.ObjectId(id);
    const delContact = await ContactModel.findByIdAndDelete(objectId)
    return delContact
}