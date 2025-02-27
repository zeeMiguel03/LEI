class Contact {
    constructor(name, number, email = "", age = null, nickname = "") {
        if (!name[0].match(/[A-Z]/)) {
            throw new Error("Upper Case Exception");
        }

        if (number.length !== 9) {
            throw new Error("Number Exception");
        }

        Object.assign(this, { name, number, email, age, nickname });
    }
}

const contacts = [];

const addContact = (contact) => contacts.push(contact);

const removeContact = (number) => {
    const index = contacts.findIndex(contact => contact.number === number);

    if (index === -1) {
        throw new Error("Contact not found!");
    }
        
    contacts.splice(index, 1);
};

const updateContact = (number, newData) => {
    const index = contacts.findIndex(contact => contact.number === number);

    if (index === -1) {
        throw new Error("Contact not found!");
    }

    if (newData.name && !newData.name[0].match(/[A-Z]/)) {
        throw new Error("Upper Case Exception");
    }
    if (newData.number && newData.number.length !== 9) {
        throw new Error("Number Exception");
    }

    Object.assign(contacts[index], newData);
};

const showAfterAge = (age) => contacts.filter(contact => contact.age >= age);

try {
    try {
        const contact1 = new Contact("joão", "912345678", "joao@example.com", 25, "Joca");
        addContact(contact1);
    } catch (error) {
        console.error("Erro ao adicionar contact1:", error.message);
    }
    
    try {
        const contact2 = new Contact("Maria", "987654321", "maria@example.com", 30, "Pedro");
        addContact(contact2);
    } catch (error) {
        console.error("Erro ao adicionar contact2:", error.message);
    }
    
    try {
        updateContact("912345678", { email: "joao.novo@example.com" });
    } catch (error) {
        console.error("Erro ao atualizar contato:", error.message);
    }

    console.log(showAfterAge(30));
} catch (error) {
    console.error(error.message);
}
