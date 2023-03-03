import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../../../../utils/fetchers'
import { PostItem } from '../PostItem'
import { PostListContainer } from './styles'

export function PostList() {
  const { data: posts } = useQuery(['issues'], () => fetchPosts())

  return (
    <PostListContainer>
      {posts?.map((post) => (
        <PostItem key={post.number} post={post} />
      ))}
    </PostListContainer>
  )
}
