import express from "express";
import { getHeroes, getHero, updateHero, delHero } from "../controllers/heroes.controllers.js"
import { authenticateToken } from "../controllers/auth.controller.js"

const router = express.Router();

// Returns every hero in the heroes table.
router.get("/getHeroes", getHeroes);

// Returns the hero correspond to the ID.
router.get("/getHero/:id", getHero);

// Updates the hero corresponding to the ID.
router.put("/updateHero/:id", authenticateToken, updateHero);

// Deletes the hero corresponding to the ID.
router.delete("/delHero/:id", authenticateToken, delHero);

export default router;