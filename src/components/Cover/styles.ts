import styled from 'styled-components'

export const CoverContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: 296px;
  background-image: linear-gradient(to bottom, transparent 30%, #14589c34);
  position: relative;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProfileContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  position: absolute;

  > div {
    margin: 0 auto;
  }
`
