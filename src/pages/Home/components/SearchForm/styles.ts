import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: 864px;
  margin: 200px auto;

  input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const FormLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: ${(props) => props.theme['base-subtitle']};
`
