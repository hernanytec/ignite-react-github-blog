import { FormContainer, FormLabelContainer } from './styles'

export function SearchForm() {
  return (
    <FormContainer>
      <form>
        <FormLabelContainer>
          <label htmlFor="publicacoes">Publicações</label>
          <span>6 publicações</span>
        </FormLabelContainer>

        <input id="publicacoes" type="text" placeholder="Buscar conteúdo" />
      </form>
    </FormContainer>
  )
}
