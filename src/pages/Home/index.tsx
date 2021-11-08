import { Header } from '../../components/Header';
import { LoginBox } from '../../components/LoginBox';

import { HomeContainer, HomeWrapper, Message, ImageWrapper } from './styles';

export function Home() {

  return (
    <HomeContainer>
      <HomeWrapper>
        <Header />
        <Message>

        </Message>
      </HomeWrapper>
      <LoginBox />
    </HomeContainer>
  )
}
