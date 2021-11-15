import { VscGithubInverted } from 'react-icons/vsc';
import { useAuth } from '../../hooks/useAuth';

import { Button } from './styles';

export function ButtonSignInGithub() {
  const { githubSignIn } = useAuth();

  return (
    <Button href={githubSignIn}>
      <VscGithubInverted size={24} />
      ENTRAR COM GITHUB
    </Button>
  );
}
