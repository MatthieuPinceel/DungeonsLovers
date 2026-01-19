import db from "../config/db.js";
import { createUserInDb } from '../services/users.service.js'

// Renvoie tous les utilisateurs de la table users.
export const getAllUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Renvoie l'utilisateur correspondant à l'ID de la table users .
export const getUser = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM users WHERE UserId = ?", [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

// Créé un utilisateur dans la table users avec les informations fournies.
export const createUser = (LastName, FirstName, Password, Username) => {
  createUserInDb({ LastName, FirstName, Password, Username}, (err, result) => {
    if (err)
      return res.status(500).json(err)

    res.json({
      massage : 'Utilisateur' + LastName + ' ' + FirstName + ' - ' + Username + ' créé.'
    })
  })
};

// Modifie l'utilisateur correspondant à l'ID dans la table users
export const updateUser = (req, res) => {
  const id = req.params.id;
  const { LastName, FirstName, Username, Password } = req.body;
  db.query(
    "SELECT * FROM users WHERE UserId = ?", [id],
    (err, rows) => {
      if (err)
        return res.status(500).json(err);
      if (rows.lenght ===0) {
        return res.status(404).json({ message: "Aucun utilisateur trouvé pour cet Id."})
      }

      const user = rows[0]
      db.query(
        "UPDATE users SET LastName = ?, FirstName = ?, Username = ?, Password = ? WHERE UserId = ?",
        [
          LastName ?? user.LastName, 
          FirstName ?? user.FirstName, 
          Username ?? user.Username,
          Password ?? user.Password,
          id
        ],
        (err, result) => {
          if (err) 
            return res.status(500).json(err);
          
          res.json({ message: 'Utilisateur ' +  user.LastName + ' ' + user.FirstName + ' ' + user.Username + ' ' + user.Password + ' modifié(e).'});
        }
      );
    }
  )
};

// Vérifie l'existence de l'utilisateur lié à l'ID, et le supprime s'il existe.
export const deleteUser = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM users WHERE UserId = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.json({ message: 'Utilisateur supprimé : ' + id });
  });
};
