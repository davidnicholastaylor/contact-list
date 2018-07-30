"use strict"

let contacts = [
    {
        name: "Someone",
        phone: "443322111",
        address: "123 Fake Street"
    },
    {
        name: "Nobody",
        phone: "999",
        address: "999 Yellowbrick Road"
    },
    {
        name: "Somebody",
        phone: "777",
        address: "1993 Moon Way"
    }
];
function storeContacts() {
localStorage.setItem("contacts", JSON.stringify(contacts));
}

function getContacts(){
    return JSON.parse(localStorage.getItem("contacts"));
}
console.log(getContacts());
module.exports = {getContacts, storeContacts};