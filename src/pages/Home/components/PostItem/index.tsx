import { useNavigate } from 'react-router-dom'
import { PostInfo } from '../../../../utils/fetchers'
import { getRelativeTime } from '../../../../utils/formatter'
import { PostItemContainer } from './styles'

interface PostItemProps {
  post: PostInfo
}

export function PostItem({
  // eslint-disable-next-line camelcase
  post: { title, body, created_at, number },
}: PostItemProps) {
  const navigate = useNavigate()

  function handlePostClick(postNumber: number) {
    navigate(`/post/${postNumber}`)
  }

  return (
    <PostItemContainer onClick={() => handlePostClick(number)}>
      <header>
        <strong>{title}</strong>
        <span>{getRelativeTime(created_at)}</span>
      </header>
      <p>{body}</p>
    </PostItemContainer>
  )
}
