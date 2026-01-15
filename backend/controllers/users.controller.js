import db from "../config/db.js";

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
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

// Créé un utilisateur dans la table users avec les informations fournies.
export const createUser = (req, res) => {
  const { LastName, FirstName, UserName } = req.body;
  db.query(
    "INSERT INTO users (UserId, LastName, FirstName, UserName) VALUES (0, ?, ?, ?)",
    [LastName, FirstName, UserName],
    (err, result) => {
      if (err) 
        return res.status(500).json(err);
    
      res.send({ message: 'Utilisateur' + LastName + FirstName + UserName + ' créé(e).'});
    }
  );
};

// Modifie l'utilisateur correspondant à l'ID dans la table users
export const updateUser = (req, res) => {
  const id = req.params.id;
  const { LastName, FirstName, UserName } = req.body;
  db.query(
    "UPDATE users SET LastName = ?, FirstName = ?, UserName = ? WHERE UserId = ?",
    [LastName, FirstName, UserName, UserId],
    (err, result) => {
      if (err) 
        return res.status(500).json(err);
      
      res.json({ message: 'Utilisateur' +  LastName + FirstName + UserName + ' modifié(e).'});
    }
  );
};

// Vérifie l'existence de l'utilisateur lié à l'ID, et le supprime s'il existe.
export const deleteUser = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM users WHERE UserId = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.json({ message: "Utilisateur supprimé", id });
  });
};
