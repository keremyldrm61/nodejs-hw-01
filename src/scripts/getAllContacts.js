import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('All contacts information:');
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());
