import { Header } from '../../components/Header';
import { LoginBox } from '../../components/LoginBox';
import { MessagesList } from '../../components/MessagesList';

import { HomeContainer, HomeWrapper, Message } from './styles';

interface MessageProps {
  id: string;
  message: string;
  user: {
    id: string;
    name: string;
    avatar_url?: string;
  };
}

export function Home() {
  return (
    <HomeContainer>
      <HomeWrapper>
        <Header />
        <Message>
          <MessagesList />
        </Message>
      </HomeWrapper>
      <LoginBox />
    </HomeContainer>
  );
}
