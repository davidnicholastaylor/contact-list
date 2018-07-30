"use strict"
let contactForm = require("./contactForm");
let listContacts = require("./contactList");
let collection = require("./contactCollection")


collection.storeContacts();
listContacts();