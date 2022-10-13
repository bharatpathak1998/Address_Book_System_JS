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
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setAddress(address) {
        this.address = address;
    }

    setCity(city) {
        this.city = city;
    }

    setState(state) {
        this.state = state;
    }

    setZip(zip) {
        this.zip = zip;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    setEmail(email) {
        this.email = email;
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