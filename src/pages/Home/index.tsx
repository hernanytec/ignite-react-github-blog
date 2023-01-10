import { Cover } from '../../components/Cover'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Cover />

      <SearchForm />
    </HomeContainer>
  )
}
