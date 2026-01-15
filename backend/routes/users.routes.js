import express from "express";
const router = express.Router();

import {getAllUsers, getUser, createUser, updateUser, deleteUser} from "../controllers/users.controller.js"

// Retourne tous les utilisateurs dans la base de données.
router.get("/getUsers", getAllUsers);

// Retourne l'utilisateur correspondant à l'ID.
router.get("/getUser/:id", getUser);

// Créer un nouvel user dans la base de données.
router.post("/createUser", createUser);

// Modifie l'utilisateur correspondant à l'ID.
router.put("/editUser/:id", updateUser);

// Supprime l'utilisateur correspondant à l'ID.
router.delete("/delUser/:id", deleteUser);

export default router;
