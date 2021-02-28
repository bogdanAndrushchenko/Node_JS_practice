const fs = require("fs")
const path = require("path")

const contactsPath = path.join(__dirname, "db", "contacts.json")

console.log(contactsPath, "<= contactsPath")

// TODO: задокументировать каждую функцию
const listContacts = () => {
    // ...твой код
}

const getContactById = (contactId) => {
    // ...твой код
}

const removeContact = (contactId) => {
    // ...твой код
}

const addContact = (name, email, phone) => {
    // ...твой код
}