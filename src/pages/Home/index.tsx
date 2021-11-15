import { useMediaQuery } from 'react-responsive';

import { Header } from '../../components/Header';
import { LoginBox } from '../../components/LoginBox';
import { MessageForm } from '../../components/MessageForm';
import { MessagesList } from '../../components/MessagesList';

import { useAuth } from '../../hooks/useAuth';

import BackgroundImg from '../../assets/background.png';

import { HomeContainer, HomeWrapper } from './styles';
import { ButtonSignInGithub } from '../../components/ButtonSignInGithub';
import { ButtonMessage } from '../../components/ButtonMessage';

export function Home() {
  const { user } = useAuth();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  let button: JSX.Element | undefined;

  if (isDesktopOrLaptop) {
    if (!user) {
      button = <ButtonSignInGithub />;
    } else {
      button = <ButtonMessage />;
    }
  }

  return (
    <HomeContainer user={!!user} imgUrl={BackgroundImg}>
      <HomeWrapper>
        <Header />
        <MessagesList />
        {button}
      </HomeWrapper>
      {user ? <MessageForm /> : <LoginBox />}
    </HomeContainer>
  );
}
