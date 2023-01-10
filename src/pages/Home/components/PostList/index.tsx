import { PostItem } from '../PostItem'
import { PostListContainer } from './styles'

export function PostList() {
  return (
    <PostListContainer>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </PostListContainer>
  )
}
