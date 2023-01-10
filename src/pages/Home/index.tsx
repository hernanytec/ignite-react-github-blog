import { Cover } from '../../components/Cover'
import { PostList } from './components/PostList'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Cover />

      <main>
        <SearchForm />
        <PostList />
      </main>
    </HomeContainer>
  )
}
