import { addContact, deleteContact, fetchContacts } from "./operations"


const arrayThunks = [addContact, deleteContact, fetchContacts]
export const arrayThunksTypes = (type) => {
  return arrayThunks.map(thunk => thunk[type])
}