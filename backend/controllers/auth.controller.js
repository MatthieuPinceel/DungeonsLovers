import db from '../config/db.js'
import jwt from 'jsonwebtoken'
import { createUserInDb } from '../services/users.service.js'

const JWT_SECRET = process.env.JWT_SECRET;

// Logins a user if it exists and if the password is correct.
export const loginUser = (req, res) => {
  const { Username, Password } = req.body

  db.query(
    "SELECT * FROM users WHERE Username = ?", [Username], 
    (err, result) => {
      if (err) 
        return res.status(500).json(err)

      if (result.length === 0) 
        return res.status(404).json({ message: "Could not find " + Username + " user." })

      const user = result[0]

      // Password verification.
      const isValid = bcrypt.compareSync(Password, user.Password)
      if (!isValid)
        return res.status(401).json({ message : "Invalid password"})

      // Création d’un token JWT
      const token = jwt.sign({ UserId: user.UserId, Username: user.Username }, JWT_SECRET, { expiresIn: '1h' })

      res.json({ token })
    }
  )
}

// Registers a user. If the username is already taken, cancels the registration
export const registerUser = (req, res) => {
  const { LastName, FirstName, Password, Username } = req.body;
  db.query(
    "SELECT * FROM users WHERE Username = ?", [Username], 
    (err, result) => {
      if (err)
        return res.status(500).json(err);

      if (result.length !== 0)
        return res.status(400).json({ message: "This username has already been taken : " + Username })

      // Hashes the password with a salt of 10 
      const hashedPassword = bcrypt.hashSync(Password, 10);

      createUserInDb(
        { LastName, FirstName, Password : hashedPassword, Username }, 
        (err, result) => {
          if (err) 
            return res.status(500).json(err)
          
          const token = jwt.sign({UserId: result.insertId, Username}, JWT_SECRET, {expiresIn: '1h'})

          return res.json({ token })
        }
      )
    }
  )
}

// Verifies if the given token is a correct one.
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token)
    return res.status(401).json({ message: "Missing Token" })

  jwt.verify(
    token, JWT_SECRET, (err, user) => {
      if (err)
        return res.status(403).json({ message: "Invalid Token" })

      req.user = user
      next()
    }
  )
}
