const ContactDetails = require("./ContactDetails.js");
const prompt = require("prompt-sync")();

let person = new ContactDetails();

person.setFirstName(prompt("Enter First Name : "));
person.setLastName(prompt("Enter Last Name : "));
person.setAddress(prompt("Enter Address : "));
person.setCity(prompt("Enter City Name : "));
person.setState(prompt("Enter State Name : "));
person.setZip(prompt("Enter Zip : "));
person.setPhoneNumber(prompt("Enter Phone Number : "));
person.setEmail(prompt("Enter Email Id : "));

console.log(person.toString());