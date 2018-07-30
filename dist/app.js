(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

function createContact(name, phone, address){
    return `<h2>${name}</h2>
    <h3>${phone}</h3>
    <h3>${address}</h3>`;
};
module.exports = createContact;
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
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
},{"./contact":1,"./contactCollection":2}],5:[function(require,module,exports){
"use strict"
let contactForm = require("./contactForm");
let listContacts = require("./contactList");
let collection = require("./contactCollection")


collection.storeContacts();
listContacts();
},{"./contactCollection":2,"./contactForm":3,"./contactList":4}]},{},[5]);
