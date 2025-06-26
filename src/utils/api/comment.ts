import axios from "axios"


export const api = axios.create({
  baseURL: 'https://api.vocabili.top/user',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

interface CommentPost {
  content: string,
  article_id: string,
  parent_id?: number,
}


export const post = async (form: CommentPost) => {
  const response = await api.post('/comments', form)
  return response.data
}

export const getByArticleId = async (article_id: string) => {
  const response = await api.get(`/comments/by_article/${article_id}`)
  return response.data
}

export const postLike = async (comment_id: number) => {
  console.log(comment_id)
  const response = await api.post(`/likes`, {comment_id})
  return response.data
}

export const deleteLike = async (comment_id: number) => {
  const response = await api.delete(`/likes/${comment_id}`)
  return response.data
}
