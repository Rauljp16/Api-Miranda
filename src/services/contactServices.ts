import { DataContacts } from "../types/global";
import dataContact from "../data/contacts.json"

const contacts: DataContacts[] = dataContact

export const allContact = (): DataContacts[] => {
    return contacts
}
export const contactById = (id: string): DataContacts | undefined => {
    const contact = contacts.find(contact => contact.id === id)
    if (!contact) {
        throw new Error("Cannont find contacts")
    }

    return contact
}