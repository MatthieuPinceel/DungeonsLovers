import express from 'express'
import { registerUser, loginUser } from '../controllers/auth.controller.js'
const router = express.Router()

// Logins the user (if the given credentials are correct).
router.post('/login', loginUser);

// Registers a user in the database (if the username isn't already taken).
router.post('/register', registerUser)

export default router