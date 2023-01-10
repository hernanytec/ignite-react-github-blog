import { useNavigate } from 'react-router-dom'
import { PostItemContainer } from './styles'

export function PostItem() {
  const navigate = useNavigate()

  function handlePostClick() {
    navigate('/post')
  }

  return (
    <PostItemContainer onClick={handlePostClick}>
      <header>
        <strong>JavaScript data types and data structures</strong>
        <span>Há 1 dia</span>
      </header>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Dignissimos doloribus itaque deleniti
        ullam et, debitis cumque, est repellendus, consequuntur eum beatae! A
        incidunt officia repellendus delectus sequi minus laborum. Dolores!
      </p>
    </PostItemContainer>
  )
}
