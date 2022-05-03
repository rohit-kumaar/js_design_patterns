class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age = 10, phone = 9668232410, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = [
  new User("Rohit", { address: new Address(769003, "Sector - 19") }),
  new User("Ricky", { address: new Address(769003, "Sector - 19") }),
];
console.log(user);
