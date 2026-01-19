import express from 'express'
import cors from 'cors'
import userRoutes from './routes/users.routes.js'
import authRoutes from './routes/auth.routes.js'
import heroesRoutes from './routes/heroes.routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)
app.use('/authentification', authRoutes)
app.use('/api/heroes', heroesRoutes)

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000')
})
