import { Cover } from '../../components/Cover'
import { PostList } from './components/PostList'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Cover />

      <main>
        <ProfileCard />
        <SearchForm />
        <PostList />
      </main>
    </HomeContainer>
  )
}
