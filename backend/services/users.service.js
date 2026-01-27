import db from '../config/db.js'

export const createUserInDb = (userData, callback) => {
  const { FirstName, LastName, Password, Username } = userData

  db.query(
    "INSERT INTO users (LastName, FirstName, Password, Username) VALUES (?, ?, ?, ?)",
    [LastName, FirstName, Password, Username],
    (err, result) => {
      callback(err, result)
    }
  )
}