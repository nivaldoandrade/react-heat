import { Header } from '../../components/Header';
import { LoginBox } from '../../components/LoginBox';
import { MessageForm } from '../../components/MessageForm';
import { MessagesList } from '../../components/MessagesList';

import { useAuth } from '../../hooks/useAuth';

import BackgroundImg from '../../assets/background.png';

import { HomeContainer, HomeWrapper } from './styles';

export function Home() {
  const { user } = useAuth();

  return (
    <HomeContainer user={!!user} imgUrl={BackgroundImg}>
      <HomeWrapper>
        <Header />
        <MessagesList />
      </HomeWrapper>
      {user ? <MessageForm /> : <LoginBox />}
    </HomeContainer>
  );
}
