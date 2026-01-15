const db = require("../config/db");

// Renvoie tous les utilisateurs de la table users.
exports.getAllUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Renvoie l'utilisateur correspondant à l'ID de la table users .
exports.getUser = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

// Créé un utilisateur dans la table users avec les informations fournies.
exports.createUser = (req, res) => {
  const { LastName, FirstName } = req.body;
  db.query(
    "INSERT INTO users (UserId, LastName, FirstName) VALUES (0, ?, ?)",
    [LastName, FirstName],
    (err, result) => {
      if (err) 
        return res.status(500).json(err);
    
      res.json({ message: `Utilisateur ${LastName} ${FirstName} créé(e).`});
    }
  );
};

// Modifie l'utilisateur correspondant à l'ID dans la table users
exports.updateUser = (req, res) => {
  const id = req.params.id;
  const { LastName, FirstName } = req.body;
  db.query(
    "UPDATE users SET LastName = ?, FirstName = ? WHERE UserId = ?",
    [LastName, FirstName, UserId],
    (err, result) => {
      if (err) 
        return res.status(500).json(err);
      
      res.json({ `Utilisateur ${LastName} ${FirstName} modifié(e).`});
    }
  );
};

// Vérifie l'existence de l'utilisateur lié à l'ID, et le supprime s'il existe.
exports.deleteUser = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM users WHERE UserId = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.json({ message: "Utilisateur supprimé", id });
  });
};
