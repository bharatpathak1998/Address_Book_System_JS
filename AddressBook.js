const ContactDetails = require("./ContactDetails.js");

let person = new ContactDetails();

person.setFirstName("Bharat");
person.setLastName("Pathak");
person.setAddress("Shivaji Nagar");
person.setCity("Tumsar");
person.setState("Maharashtra");
person.setZip("441912");
person.setPhoneNumber("7559201321");
person.setEmail("bharatpathak099@gmail.com");

console.log(person.toString());