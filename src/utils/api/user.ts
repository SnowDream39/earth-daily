import { useStatusStore } from "@/store/status";
import axios from "axios";

const statusStore = useStatusStore()


interface UserLogin {
  username: string,
  password: string
}

interface UserRegister {
  email: string,
  password: string,
  username: string
}


const api = axios.create({
  baseURL: 'https://api.vocabili.top',
})

export const login = async (form: UserLogin) => {

  const data = new URLSearchParams()
  data.append('grant_type', 'password')
  data.append('username', form.username)
  data.append('password', form.password)
  data.append('scope', '')
  data.append('client_id', 'string')        // 如果Swagger要求，这里必须写
  data.append('client_secret', '********') // 同上

  const response = await api.post('/user/auth/jwt/login', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
  })
  const access_token = response.data.access_token
  localStorage.setItem('access_token', access_token)
  await updateUserInfo()
  return response.data.access_token
}

export const register = async (form: UserRegister) => {
  const response = await api.post('/user/auth/register', {
    email: form.email,
    password: form.password,
    username: form.username
  })

  return response.data
}

export const updateUserInfo = async () => {
  const access_token = localStorage.getItem('access_token')
  if (!access_token) {
    return null
  }
  const response = await api.get('/user/users/me', {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  })

  const data = response.data
  statusStore.userName = data.username
  statusStore.userId = data.id

  if (data.is_superuser) {
    statusStore.isSuperUser = true
    localStorage.setItem('is_superuser', 'true')
  }

  return response.data
}

