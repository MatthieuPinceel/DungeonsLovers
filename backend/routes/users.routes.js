const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

// Retourne tous les utilisateurs dans la base de données.
router.get("/getUsers", userController.getAllUsers);

// Retourne l'utilisateur correspondant à l'ID.
router.get("/getUser/:id", userController.getUser);

// Créer un nouvel user dans la base de données.
router.post("/createUser", userController.createUser);

// Modifie l'utilisateur correspondant à l'ID.
router.put("/editUser/:id", user.controller.updateUser);

// Supprime l'utilisateur correspondant à l'ID.
router.delete("/delUser/:id", user.controller.deleteUser);

module.exports = router;
