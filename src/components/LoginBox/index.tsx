import BannerGirl from '../../assets/banner-girl.png';

import { LoginBoxWrapper } from './styles';
import { ButtonSignInGithub } from '../ButtonSignInGithub';

export function LoginBox() {
  return (
    <LoginBoxWrapper imgUrl={BannerGirl}>
      <strong>Envie e compartilhe sua mensagem</strong>
      <ButtonSignInGithub />
    </LoginBoxWrapper>
  );
}
