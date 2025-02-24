class Contact {
    constructor(name, number, email = "", age = null, nickname = "") {
        if (name[0] !== name[0].toUpperCase()) {
            throw new Error("Upper Case Exception");
        }

        if (number.length !== 9) {
            throw new Error("Number Exception");
        }

        this.name = name;
        this.number = number;
        this.email = email;
        this.age = age;
        this.nickname = nickname;
    }
}

const contacts = [];

function addContact(contact) {
    contacts[contacts.length] = contact;
}

function findIndex(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].number === number) {
            return i;
        } 
    }

    return -1;
}

function removeContact(number) {
    let index = findIndex(contacts, number);

    if (index == -1) {
        throw new Error("Contact not found!");
    }

    for (let i = index; i < contacts.length - 1; i++) {
        contacts[i] = contacts[i + 1];
    }

    contacts.length--;
}

function updateContact(number, newData) {
    let index = findIndex(contacts, number);

    if (index === -1) {
        throw new Error("Contact not found!");
    }

    if (newData.name !== undefined) {
        if (newData.name[0] !== newData.name[0].toUpperCase()) {
          throw new Error("UpperCase Exception");
        }

        contacts[index].name = newData.name;
    }
      
    if (newData.number !== undefined) {
        if (number.length !== 9) {
          throw new Error("Number Exception");
        }

        contacts[index].number = newData.number;
    }

    if (newData.email !== undefined) {
        contacts[index].email = newData.email;
    }

    if (newData.age !== undefined) {
        contacts[index].age = newData.age;
    }

    if (newData.nickname !== undefined) {
        contacts[index].nickname = newData.nickname;
    }
}

function showAfterAge(age) {
    const result = [];

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].age >= age) {
            result[result.length] = contacts[i];
        }
    }

    return result;
}

try {
    const contact1 = new Contact("João", "912345678", "joao@example.com", 25, "Joca");
    const contact2 = new Contact("Maria", "987654321", "maria@example.com", 30);

    addContact(contact1);
    addContact(contact2);

    updateContact("912345678", { email: "joao.novo@example.com" });

    console.log(showAfterAge(30));
    
} catch (error) {
    console.error(error.message);
}