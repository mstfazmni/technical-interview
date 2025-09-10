class ContactBook {
    contactBookList = [];

    addContact (name, phone) {
        name = name.toLowerCase();
        const contact = this.contactBookList.find((c) => c.name === name);
        if(contact) {
            this.updateContact(contact, phone);
            console.log("Contact already exists, phone number updated!", contact);
        } else {
            this.contactBookList.push({ name, phone });
            console.log("Contact added succesfully");
        }
       
    }

    updateContact (contact, phone) {
        contact.phone = phone;
        console.log("phone number updated.")
    }

    listContacts () {
        console.log("Contact List: ", this.contactBookList);
    }

    searchContact (name) {
        name = name.toLowerCase();
        const contact = this.contactBookList.find((c) => c.name === name);
        // console.log(contact);
        if (!contact) {
            console.log("Contact not found");
        } else {
            console.log(`Contact ${contact.name} with Phone number: ${contact.phone}`);
        }
    }

    removeContact (name) {
        name = name.toLowerCase();
        const idx = this.contactBookList.findIndex((c) => c.name === name);
        if(idx === -1) {
            console.log("Contact not found");
        } else {
            const removedContact = this.contactBookList.splice(idx, 1);
            console.log("Contact was deleted successfully!", removedContact);
        }
    }
}

const contact1 = new ContactBook();

contact1.addContact("Mostafa", 8252889400);
contact1.addContact("Jake", 123456789);

contact1.addContact("Mostafa", 97498546958);

contact1.searchContact("Mostafa");
contact1.removeContact("Jake");

contact1.listContacts();