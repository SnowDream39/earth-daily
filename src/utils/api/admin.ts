import { api } from "./comment"

// 评论

export const getAllComments = async (page: number = 1, page_size: number = 20) => {
  const response = await api.get(`/comments/all`, {
    params: { page, page_size }
  })
  return response.data
}

export const deleteComment = async (comment_id: number) => {
  const response = await api.delete(`/comments/${comment_id}`)
  return response.data
}


// 用户

export const getAllUsers = async (page: number = 1, page_size: number = 20) => {
  const response = await api.get(`/admin/list-users`, {
    params: { page, page_size }
  })

  return response.data
}

export const chargePremium = async (id: number, days: number) => {
  const response = await api.post(`/admin/set-premium`, {
    id,
    days
  })
  return response.data
}

export const setAdmin = async (id: number) => {
  const response = await api.post(`/admin/set-admin`, {
    id
  })
  return response.data
}

export const unsetAdmin = async (id: number) => {
  const response = await api.post(`/admin/unset-admin`, {
    id
  })
  return response.data
}
