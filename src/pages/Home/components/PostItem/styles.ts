import styled from 'styled-components'

export const PostItemContainer = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 32px;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border 0.2s;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 16px;

    strong {
      color: ${(props) => props.theme['base-title']};
      font-size: 20px;
      line-height: 1.6;
      max-width: 70%;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 14px;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
