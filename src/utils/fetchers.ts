import { api } from '../lib/axios'

interface UserInfo {
  name: string
  login: string
  company: string
  followers: number
  avatar_url: string
  bio: string
}

export interface PostInfo {
  number: number
  created_at: string
  title: string
  body: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}

interface IssueResponse {
  items: PostInfo[]
}

export async function fetchUserInfo() {
  const { data } = await api.get<UserInfo>('/users/hernanytec')
  return data
}

export async function fetchPosts(query: string = '') {
  const { data } = await api.get<IssueResponse>(
    `/search/issues?q=${query}repo:hernanytec/ignite-react-github-blog`,
  )
  return data.items
}

export async function fetchPost(postNumber: string) {
  const { data } = await api.get<PostInfo>(
    `/repos/hernanytec/ignite-react-github-blog/issues/${postNumber}`,
  )

  return data
}
