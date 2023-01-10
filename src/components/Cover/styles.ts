import styled from 'styled-components'

export const CoverContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: 296px;
  background-image: linear-gradient(
    to bottom,
    transparent 30%,
    ${(props) => props.theme['base-profile']}
  );
  position: relative;
  z-index: -10;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
