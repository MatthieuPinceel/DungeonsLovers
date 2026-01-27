import db from "../config/db.js";
import { createUserInDb } from '../services/users.service.js'

// Returns every users from the users table.
export const getAllUsers = (req, res) => {
  db.query(
    "SELECT * FROM users",
    (err, results) => {
      if (err) 
        return res.status(500).json(err);

      res.json(results);
    }
  )
}

// Returns the user corresponding to the given ID from the users table.
export const getUser = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM users WHERE UserId = ?", [id],
    (err, results) => {
      if (err)
        return res.status(500).json(err);
    
      res.json(results[0]);
    }
  )
}

// Creates an user from the given data and stores it in the users database.
export const createUser = (LastName, FirstName, Password, Username) => {
  createUserInDb({ LastName, FirstName, Password, Username}, 
    (err, result) => {
      if (err)
        return res.status(500).json(err)

      res.json({ message : 'User' + LastName + ' ' + FirstName + ' - ' + Username + ' created.' })
    }
  )
}

// Updates the user corresponding to the ID.
export const updateUser = (req, res) => {
  const id = req.params.id;
  const { LastName, FirstName, Username, Password } = req.body;
  db.query(
    "SELECT * FROM users WHERE UserId = ?", [id],
    (err, rows) => {
      if (err)
        return res.status(500).json(err);

      if (rows.lenght ===0)
        return res.status(404).json({ message: "No user found with that ID."})

      const user = rows[0]

      db.query(
        "SELECT * FROM users WHERE Username = ?", [Username],
        (err, result) => {
          if (err)
            return res.status

          if (result.lenght > 0)
            res.status(403).json({ message : "Username already taken."})
          Username = user.Username

          db.query(
            "UPDATE users SET LastName = ?, FirstName = ?, Username = ?, Password = ? WHERE UserId = ?",
            [
              LastName ?? user.LastName, 
              FirstName ?? user.FirstName, 
              Username ?? user.Username,
              Password ?? user.Password,
              id
            ],
            (err, results) => {
              if (err) 
                return res.status(500).json(err);
              
              res.json({ message: 'User ' + user.Username + ' updated. ' + results});
            }
            
          )
        }
      )
    }
  )
}

// Deletes the user corresponding to the ID (if it exists).
export const delUser =(req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM users WHERE UserId = ?",[id],
    (err, rows) => {
      if (err)
        return res.status(500).json(err);

      if (rows.lenght === 0)
        return res.status(404).json({ message: "No user found for the given Id : " + id})

      db.query(
        "DELETE FROM users WHERE UserId = ?", [id],
        (err, result) => {
          if (err)
            return res.status(500).json(err)

          res.json({ message : "User " + id + " deleted."})
        }
      )
    }
  )
}
