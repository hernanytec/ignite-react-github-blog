import { Cover } from '../../components/Cover'
import { PostList } from './components/PostList'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, MainContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Cover />

      <MainContainer>
        <ProfileCard />
        <SearchForm />
        <PostList />
      </MainContainer>
    </HomeContainer>
  )
}
