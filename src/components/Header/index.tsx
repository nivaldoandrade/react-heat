import { HeaderContainer } from './styles';

import Logo from '../../assets/logo.png';
import { Avatar } from '../Avatar';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Do While de 2021" />
      <Avatar />
    </HeaderContainer>
  );
}
