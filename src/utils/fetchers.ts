import { api } from '../lib/axios'

interface UserInfo {
  name: string
  login: string
  company: string
  followers: number
  avatar_url: string
  bio: string
}

export async function fetchUserInfo(): Promise<UserInfo> {
  const { data } = await api.get('/users/hernanytec')
  return data
}
