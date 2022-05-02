/*comment A User has an id and a name, and can tell you if they have access. */
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

/*comment NullUser is a class that represents a user that doesn't exist. */
class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

/*comment Creating an array of users. */
let users = [new User(1, "Bob"), new User(2, "John")];

/**comment
 * If the user exists, return the user, otherwise return a NullUser.
 * @param id - The id of the user to get.
 * @returns A NullUser object.
 */
function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
}

/**comment
 * "Prints a user's name and access status."
 *
 * The function is doing two things:
 *
 * Printing the user's name
 * Printing the user's access status
 * The function is doing two things, but it's only doing one thing well
 * @param id - The id of the user to print
 */
function printUser(id) {
  const user = getUser(id);
  console.log(`Hello ${user.name}`);

  if (user.hasAccess()) {
    console.log(`You have access`);
  } else {
    console.log(`You are not allowed here`);
  }
}
