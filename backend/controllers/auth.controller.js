import db from '../config/db.js'
import jwt from 'jsonwebtoken'
import { createUserInDb } from '../services/users.service.js'

const JWT_SECRET = "tonSecretSuperSecret" // tu peux mettre ça dans .env

export const loginUser = (req, res) => {
  const { Username, Password } = req.body

  db.query(
    "SELECT * FROM users WHERE Username = ?", [Username], 
    (err, result) => {
      if (err) 
        return res.status(500).json(err)

      if (result.length === 0) 
        return res.status(404).json({ message: "Utilisateur non trouvé" })

      const user = result[0]

      // Vérification du mot de passe
          if ((Password === user.Password) === false) {
            return res.status(404).json({ message: "Mot de passe incorrect" })
          }

      // Création d’un token JWT
      const token = jwt.sign({ UserId: user.UserId, email: user.email }, JWT_SECRET, { expiresIn: '1h' })

      res.json({ message: 'Connexion réussie : ' + token })
  })
}

// Si un utilisateur avec le même pseudonyme existe déjà, la création d'utilisateur est annulée.
export const registerUser = (req, res) => {
  console.log("BODY REÇU :", req.body)
  const { LastName, FirstName, Password, Username } = req.body;

  db.query(
    "SELECT * FROM users WHERE Username = ?", [Username], 
    (err, result) => {
      if (err)
        return res.status(500).json(err);

      if (result.length !== 0) {
        return res.status(400).json({ message: "Utilisateur avec le même pseudonyme existe déjà" })
      }

      createUserInDb(
        { LastName, FirstName, Password, Username }, 
        (err, result) => {
          if (err) 
            return res.status(500).json(err)
          
          const token = jwt.sign({UserId: result.insertId, Username}, JWT_SECRET, {expiresIn: '1h'})

          return res.json({ message: 'Connexion réussie : ' + token })
        }
      )
    }
  )
}

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token)
    return res.status(401).json({ message: "Token manquant" })

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ message: "Token invalide" })

    req.user = user
    next()
  })
}
