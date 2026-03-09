import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number = 5) => {
  try {
    const contacts = await readContacts();

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    await writeContacts(contacts);
    console.log(`${number} new contact details have been added.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
