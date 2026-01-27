import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const user = ref(null);

  const router = useRouter()

  // Vérifie si l'utilisateur est connecté
  const isLoggedIn = () => !!token.value

  // Login
  const login = async (Username: string, Password: string) => {
    try {
      const res = await axios.post('http://localhost:3000/authentification/login', {
        Username,
        Password
      })
      const token = res.data.token
      localStorage.setItem('token', token)
      console.log('Connexion réussie')
      router.push('/')
    } catch (err) {
      console.error('Erreur lors de la connexion :', err)
      throw err
    }
  }

  // Register
  const register = async (FirstName: string, LastName: string, Username: string, Password: string) => {
    try {
      const res = await axios.post('http://localhost:3000/authentification/register', {
        FirstName,
        LastName,
        Username,
        Password
      })
      const token = res.data.token
      localStorage.setItem('token', token)
      console.log("Inscription terminée, token stocké !")
      router.push('/')
    } catch (err) {
      console.error("Erreur lors de l'inscription : ", err)
      throw err
    }
  }

  // Logout
  const logout = () => {
    token.value = null
    localStorage.removeItem('token')
    router.push('/login')
  }

    const checkAuth = () => {
    const storedToken = localStorage.getItem('authToken')
    const storedUser = localStorage.getItem('authUser')

    if (storedToken && storedUser) {
        token.value = storedToken
        user.value = JSON.parse(storedUser)

        // Restaurer l'en-tête Authorization pour axios
        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`
    } else {
        token.value = null
        user.value = null
        delete axios.defaults.headers.common['Authorization']
    }
    }

  return {
    token,
    isLoggedIn,
    login,
    register,
    logout
  }
})