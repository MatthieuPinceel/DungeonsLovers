import db from '../config/db.js'

export const createUserInDb = (userData, callback) => {
  const { FirstName, LastName, Password, Username } = userData

  db.query(
    "INSERT INTO users (UserId, LastName, FirstName, Password, Username) VALUES (0, ?, ?, ?, ?)",
    [LastName, FirstName, Password, Username],
    (err, result) => {
      callback(err, result)
    }
  )
}
