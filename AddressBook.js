const ContactDetails = require("./ContactDetails.js");
const prompt = require("prompt-sync")();

class AddressBook {

    array = new Array();

    add(array) {
        let person = new ContactDetails();

        person.setFirstName(prompt("Enter First Name : "));
        person.setLastName(prompt("Enter Last Name : "));
        person.setAddress(prompt("Enter Address : "));
        person.setCity(prompt("Enter City Name : "));
        person.setState(prompt("Enter State Name : "));
        person.setZip(prompt("Enter Zip : "));
        person.setPhoneNumber(prompt("Enter Phone Number : "));
        person.setEmail(prompt("Enter Email : "));

        array.push(person);
        console.log("Contact Added Successfully");
    }

    display(array) {
        if (!array.length) {
            console.log("There Is No Contact Available!");
        } else {
            console.log(array.toString());
        }
    }

    editContact(array) {
        let count = 0;
        if (!array.length) {
            console.log("There Is No Contact Available!");
        } else {
            let editName = prompt("Enter First Name Of A Person To Edit : ");
            for (let i = 0; i < array.length; i++) {
                let contact = array[i];
                if ((contact.getFirstName() == editName)) {

                    let firstName = prompt("Enter New First Name : ")
                    contact.setFirstName(firstName);

                    let lastName = prompt("Enter New Last Name : ")
                    contact.setLastName(lastName);

                    let address = prompt("Enter New Address : ")
                    contact.setAddress(address);

                    let city = prompt("Enter New City Name : ")
                    contact.setCity(city);

                    let state = prompt("Enter New State Name : ")
                    contact.setState(state);

                    let zip = prompt("Enter New Zip : ")
                    contact.setZip(zip);

                    let phoneNumber = prompt("Enter New Phone Number : ")
                    contact.setPhoneNumber(phoneNumber);

                    let email = prompt("Enter New Email Id : ")
                    contact.setEmail(email);

                    console.log("Contact Edited Successfully");
                    count++;
                    break;
                }
            }
            if (count == 0) {
                console.log("Please Enter Valid First Name!");
            }
        }
    }

    deleteContact(array) {
        let count = 0;
        if (!array.length) {
            console.log("There Is No Contact Available!");
        } else {
            let deleteName = prompt("Enter First Name Of A Person To Delete : ");
            for (let i = 0; i < array.length; i++) {
                let contact = array[i];
                if ((contact.getFirstName() == deleteName)) {
                    let index = array.indexOf(deleteName);
                    array.splice(index, 1);
                    console.log("Contact Deleted Successfully");
                    count++;
                    break;
                }
            }
            if (count == 0) {
                console.log("Please Enter Valid First Name!");
            }
        }
    }

    countContact(array) {
        let count = array.reduce((a, b) => a.concat(b), []).length;
        console.log("Number of contact : " + count);
    }
}

module.exports = AddressBook;