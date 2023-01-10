import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  display: flex;
  gap: 32px;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 32px 32px 32px 40px;
  border-radius: 10px;
  margin-top: -100px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const UsernameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  h1 {
    font-size: 24px;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border 0.2s;
    }
  }
`

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const InfoContainer = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  display: flex;
  gap: 24px;
  margin-top: 24px;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
