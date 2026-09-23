// Get the database name from an environment variable.
// Example:
// KEY_VALUE_DB=keyValueDatabase
const keyValueDb = process.env.KEY_VALUE_DB;

// Get the username from an environment variable.
// Example:
// KEY_VALUE_USER=myUser
const keyValueUser = process.env.KEY_VALUE_USER;

// Get the password from an environment variable.
// Example:
// KEY_VALUE_PASSWORD=myPassword
const keyValuePassword = process.env.KEY_VALUE_PASSWORD;

// Get the database that is associated with the current MongoDB
// environment/connection.
db = db.getSiblingDB(keyValueDb);

// Create a new user in the database.
db.createUser({
  // The username for the new database user.
  user: keyValueUser,

  // The password for the new database user.
  pwd: keyValuePassword,

  // Define what this user is allowed to do.
  roles: [
    {
      // "readWrite" allows the user to read data
      // and write/change data in the database.
      role: "readWrite",

      // Give this role only on the specified database.
      db: keyValueDb,
    },
  ],
});
