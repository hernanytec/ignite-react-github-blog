import { PostList } from './components/PostList'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'

export function Home() {
  return (
    <>
      <ProfileCard />
      <SearchForm />
      <PostList />
    </>
  )
}
