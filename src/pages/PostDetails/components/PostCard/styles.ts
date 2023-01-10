import styled from 'styled-components'

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 32px 32px 32px 40px;
  border-radius: 10px;
  margin-top: -100px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: bold;
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid transparent;
      text-transform: uppercase;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
        transition: border 0.2s;
      }
    }
  }
`

export const PostDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 32px;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
