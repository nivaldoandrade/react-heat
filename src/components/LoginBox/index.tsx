
import { LoginBoxWrapper } from './styles';

import BannerGirl from './../../assets/banner-girl.png';

export function LoginBox() {
  return (
    <LoginBoxWrapper imgUrl={BannerGirl}>
      <strong>Envie e compartilhe sua mensagem</strong>
      <button>
        ENTRAR COM GITHUB
      </button>
    </LoginBoxWrapper>
  )
}
