const AddressBook = require("./AddressBook.js");
const prompt = require("prompt-sync")();

let addressBook = new AddressBook();
let array = new Array();
exit = true;

while (exit) {

    console.log("1.Add contact  2.Display Contact  0.Exit");
    let options = parseInt(prompt());

    switch (options) {
        case 1:
            addressBook.add(array);
            break;
        case 2:
            addressBook.display(array);
            break;
        case 0:
            exit = false;
            break;
        default:
            console.log("Please Choose Valid Option!");
            break;
    }
}