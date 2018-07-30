"use strict"

let createContact = require ("./contact");
let getContacts = require("./contactCollection")

// Get info from contacts (another module)
// Iterate over info
// Render info to DOM
let data = getContacts.getContacts()
console.log(data);
function listContacts(){
data.forEach(contact => {
    let contactComponent = createContact(contact.name, contact.phone, contact.address)
    writeContactsToDOM(contactComponent);
});
}

function writeContactsToDOM(contact){
    document.querySelector("#contactList").innerHTML += contact;
}

module.exports = listContacts;