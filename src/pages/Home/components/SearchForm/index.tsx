import { useQuery } from '@tanstack/react-query'
import { FormEvent, useState } from 'react'
import { fetchPosts } from '../../../../utils/fetchers'
import { FormContainer, FormLabelContainer } from './styles'

export function SearchForm() {
  const [searchText, setSearchText] = useState('')
  const { data: issues } = useQuery(['issues', searchText], () =>
    fetchPosts(searchText),
  )

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    // @ts-ignore
    const { value } = e.target.search
    setSearchText(value)
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormLabelContainer>
          <label htmlFor="publicacoes">Publicações</label>
          <span>
            {issues?.length}{' '}
            {issues?.length === 1 ? 'publicação' : 'publicações'}{' '}
          </span>
        </FormLabelContainer>

        <input
          id="publicacoes"
          type="text"
          name="search"
          placeholder="Buscar conteúdo"
        />
      </form>
    </FormContainer>
  )
}
