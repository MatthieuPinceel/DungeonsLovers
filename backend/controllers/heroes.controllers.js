import db from '../config/db.js'

// Returns every heroes from the heroes table.
export const getHeroes = (req, res) => {
  db.query(
    "SELECT * FROM heroes",
    (err, results) => {
      if (err) 
        return res.status(500).json(err);

      res.json(results);
    }
  )
}

// Returns the hero corresponding to the given ID from the heroes table.
export const getHero = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM heroes WHERE HeroId = ?", [id], 
    (err, results) => {
      if (err) 
        return res.status(500).json(err);

      res.json(results[0]);
    }
  )
}

// Updates the hero identified thanks to the given ID from the heroes table.
export const updateHero = (req, res) => {
  const id = req.params.id;
  const { Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListID, MiscellaneousID, imageURL } = req.body;  
  db.query(
    "SELECT * FROM heroes WHERE HeroID = ?",[id],
    (err, rows) => {
      if (err)
        return res.status(500).json(err);

      if (rows.lenght === 0)
        return res.status(404).json({ message: "No hero found for the given Id : " + id})

      const hero = rows[0]
      db.query(
        `UPDATE heroes SET 
          Name = ?, 
          MaxHP = ?,
          Dodge = ?,
          Protection = ?,
          Speed = ?,
          AccuracyModifier = ?,
          CriticChance = ?,
          Damage = ?,
          ResListID = ?,
          MiscellaneousID = ?,
          imageURL = ?
        WHERE HeroId = ?`,
        [
          Name ?? hero.Name, 
          MaxHP ?? hero.MaxHP, 
          Dodge ?? hero.Dodge,
          Protection ?? hero.Protection,
          Speed ?? hero.Speed,
          AccuracyModifier ?? hero.AccuracyModifier,
          CriticChance ?? hero.CriticChance,
          Damage ?? hero.Damage,
          ResListID ?? hero.ResListID,
          MiscellaneousID ?? hero.MiscellaneousID,
          imageURL ?? hero.imageURL,
          id
        ],
        (err, result) => {
          if (err) 
            return res.status(500).json(err);

          res.json({ message: 'Hero ' +  hero.Name + ' updated.'});
        }
      )
    }
  )
}

// Deletes the hero corresponding to the ID (if it exists).
export const delHero =(req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM heroes WHERE HeroId = ?",[id],
    (err, results) => {
      if (err)
        return res.status(500).json(err);

      if (results.lenght === 0)
        return res.status(404).json({ message: "No hero found for the given Id : " + id})

      db.query(
        "DELETE FROM heroes WHERE HeroId = ?", [id],
        (err, result) => {
          if (err)
            return res.status(500).json(err)

          res.json({ message : "Hero " + id + " deleted."})
        }
      )
    }
  )
}