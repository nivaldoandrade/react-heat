import { HeaderContainer } from './styles';

import Logo from '../../assets/logo.png';


export function Header() {

  return (
    <HeaderContainer>
      <img src={Logo} alt="Do While de 2021" />
    </HeaderContainer>
  )
}
