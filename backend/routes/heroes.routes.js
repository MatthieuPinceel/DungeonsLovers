import express from 'express'
import db from '../db.js'

const router = express.Router()

// GET all heroes
router.get('/getHeroes', (req, res) => {
  const sql = 'SELECT * FROM Heroes'

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur SQL :', err)
      return res.status(500).json({ error: 'Database error' })
    }

    res.json(results)
  })
})

export default router
