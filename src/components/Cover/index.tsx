import EffectRight from '../../assets/header-effect-right.svg'
import EffectLeft from '../../assets/hedaer-effect-left.svg'
import Logo from '../../assets/logo.svg'
import { ProfileCard } from '../ProfileCard'
import { CoverContainer, LogoContainer, ProfileContainer } from './styles'

export function Cover() {
  return (
    <CoverContainer>
      <LogoContainer>
        <img src={EffectLeft} alt="" />
        <img src={Logo} alt="" />
        <img src={EffectRight} alt="" />
      </LogoContainer>

      <ProfileContainer>
        <ProfileCard />
      </ProfileContainer>
    </CoverContainer>
  )
}
