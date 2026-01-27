import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser} from "../controllers/users.controller.js"
import { authenticateToken } from "../controllers/auth.controller.js"

const router = express.Router();

// Returns every user from the users table.
router.get("/getUsers", authenticateToken, getAllUsers);

// Returns the user corresponding to the ID.
router.get("/getUser/:id", authenticateToken, getUser);

// Creates a new user in the users table (if given username not taken).
router.post("/createUser", createUser);

// Update the user corresponding to the ID.
router.put("/editUser/:id", authenticateToken, updateUser);

// Deletes the user corresponding to the ID.
router.delete("/delUser/:id", deleteUser);

export default router;
