import { VscGithubInverted } from 'react-icons/vsc';

import { useAuth } from '../../hooks/useAuth';

import BannerGirl from '../../assets/banner-girl.png';

import { LoginBoxWrapper } from './styles';

export function LoginBox() {
  const { githubSignIn } = useAuth();

  return (
    <LoginBoxWrapper imgUrl={BannerGirl}>
      <strong>Envie e compartilhe sua mensagem</strong>
      <a href={githubSignIn}>
        <VscGithubInverted size={24} />
        ENTRAR COM GITHUB
      </a>
      {/* <button type="button" onClick={signOut}>
        DESLOGAR
      </button> */}
    </LoginBoxWrapper>
  );
}
