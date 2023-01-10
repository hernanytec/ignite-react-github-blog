import { Outlet } from 'react-router-dom'
import { Cover } from '../../components/Cover'
import { ContentContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Cover />

      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  )
}
