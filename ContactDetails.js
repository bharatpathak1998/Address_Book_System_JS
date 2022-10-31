class ContactDetails {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    setFirstName(firstName) {
        let pattern = RegExp('^[A-Z][a-z]{2,}');
        if (pattern.test(firstName)) {
            this.firstName = firstName;
        } else {
            throw "First name is not valid";
        }
    }

    getFirstName() {
        return this.firstName;
    }

    setLastName(lastName) {
        let pattern = RegExp('^[A-Z][a-z]{2,}');
        if (pattern.test(lastName)) {
            this.lastName = lastName;
        } else {
            throw "Last name is not valid"
        }
    }

    setAddress(address) {
        let pattern = RegExp('^[A-Za-z]{4,}');
        if (pattern.test(address)) {
            this.address = address;
        } else {
            throw "Address is not valid"
        }
    }

    setCity(city) {
        let pattern = RegExp('^[A-Z][a-z]{2,}$');
        if (pattern.test(city)) {
            this.city = city;
        } else {
            throw "City is not valid"
        }
    }

    setState(state) {
        let pattern = RegExp('^[A-Za-z]{2,}$');
        if (pattern.test(state)) {
            this.state = state;
        } else {
            throw "State is not valid"
        }
    }

    setZip(zip) {
        let pattern = RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if (pattern.test(zip)) {
            this.zip = zip;
        } else {
            throw "Zip is not valid"
        }
    }

    setPhoneNumber(phoneNumber) {
        let pattern = RegExp('^[0-9]{0,2}?[ ][0-9]{10}');
        if (pattern.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            throw "Phonenumber is not valid"
        }
    }

    setEmail(email) {
        let pattern = RegExp('^[a-zA-Z0-9]+[.+-]?[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z]+[.]?[a-zA-Z]+[,]?$');
        if (pattern.test(email)) {
            this.email = email;
        } else {
            throw "Email is not valid"
        }
    }

    toString() {
        return "{" +
            "firstName='" + this.firstName + '\'' +
            ", lastName='" + this.lastName + '\'' +
            ", address='" + this.address + '\'' +
            ", city='" + this.city + '\'' +
            ", state='" + this.state + '\'' +
            ", zip='" + this.zip + '\'' +
            ", phoneNumber='" + this.phoneNumber + '\'' +
            ", email='" + this.email + '\'' +
            '}';
    }
}

module.exports = ContactDetails;