import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from '@tanstack/react-query'
import { fetchUserInfo } from '../../../../utils/fetchers'
import {
  Info,
  InfoContainer,
  ProfileCardContainer,
  UserDetailsContainer,
  UsernameContainer,
} from './styles'

export function ProfileCard() {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUserInfo,
  })

  return (
    <ProfileCardContainer>
      <img src={user?.avatar_url} alt="" />

      <UserDetailsContainer>
        <div>
          <UsernameContainer>
            <h1>{user?.name}</h1>

            <a
              href="https://github.com/hernanytec"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </UsernameContainer>

          <p>{user?.bio}</p>
        </div>

        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            {user?.login}
          </Info>

          <Info>
            <FontAwesomeIcon icon={faBuilding} />
            {user?.company}
          </Info>

          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
            {user?.followers} seguidores
          </Info>
        </InfoContainer>
      </UserDetailsContainer>
    </ProfileCardContainer>
  )
}
