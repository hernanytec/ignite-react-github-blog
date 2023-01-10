import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  Info,
  InfoContainer,
  PostCardContainer,
  PostDetailsContainer,
} from './styles'

export function PostCard() {
  return (
    <PostCardContainer>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>

        <a
          href="https://github.com/hernanytec"
          target="_blank"
          rel="noreferrer"
        >
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <PostDetailsContainer>
        <h1>JavaScript data types and data structures</h1>

        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
          </Info>

          <Info>
            <FontAwesomeIcon icon={faCalendarDay} />
          </Info>

          <Info>
            <FontAwesomeIcon icon={faComment} />
            Comentários
          </Info>
        </InfoContainer>
      </PostDetailsContainer>
    </PostCardContainer>
  )
}
