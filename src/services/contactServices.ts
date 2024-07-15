import { DataContacts } from "../types/global";
import dataContact from "../data/contacts.json"

const contact: DataContacts[] = dataContact

export const allContact = (): DataContacts[] =>{
    return contact
}
export const contactById = (id: string): DataContacts | undefined =>{
    return contact.find(contact => contact.id === id)
}