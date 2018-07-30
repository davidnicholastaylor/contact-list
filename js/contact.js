"use strict"

function createContact(name, phone, address){
    return `<h2>${name}</h2>
    <h3>${phone}</h3>
    <h3>${address}</h3>`;
};
module.exports = createContact;