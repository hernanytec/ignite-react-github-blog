import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Info,
  InfoContainer,
  ProfileCardContainer,
  UserDetailsContainer,
  UsernameContainer,
} from './styles'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src="https://www.github.com/hernanytec.png" alt="" />

      <UserDetailsContainer>
        <div>
          <UsernameContainer>
            <h1>Hernany Costa</h1>

            <a
              href="https://github.com/hernanytec"
              target="_blank"
              rel="noreferrer"
            >
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </UsernameContainer>

          <p>
            Web developer and Machine learning enthusiast. Computer Scientist
          </p>
        </div>

        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            hernanytec
          </Info>

          <Info>
            <FontAwesomeIcon icon={faBuilding} />
            Compass.UOL
          </Info>

          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
            24 seguidores
          </Info>
        </InfoContainer>
      </UserDetailsContainer>
    </ProfileCardContainer>
  )
}
