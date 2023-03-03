import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { PostInfo } from '../../../../utils/fetchers'
import { getRelativeTime } from '../../../../utils/formatter'
import {
  Info,
  InfoContainer,
  PostCardContainer,
  PostDetailsContainer,
} from './styles'

interface PostCardProps {
  post: PostInfo
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostCardContainer>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>

        <a href={post.html_url} target="_blank" rel="noreferrer">
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <PostDetailsContainer>
        <h1>{post.title}</h1>

        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            {post.user.login}
          </Info>

          <Info>
            <FontAwesomeIcon icon={faCalendarDay} />
            {getRelativeTime(post.created_at)}
          </Info>

          <Info>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} {post.comments === 1 ? 'Comentário' : 'Comentários'}
          </Info>
        </InfoContainer>
      </PostDetailsContainer>
    </PostCardContainer>
  )
}
