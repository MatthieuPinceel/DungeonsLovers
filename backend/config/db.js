import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "DungeonLover",
  password: "password",
  database: "test"
});

db.connect((err) => {
  if (err) {
    console.error("Erreur connexion MySQL :", err);
  } else {
    console.log("Connecté à MySQL ✅");
  }
});

export default db;
