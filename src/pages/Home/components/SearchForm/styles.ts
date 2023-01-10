import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: 864px;
  margin-top: 72px;

  input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const FormLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: ${(props) => props.theme['base-subtitle']};
`
