import { MessageContainer, InfoUser, ImageBorder } from './styles';

interface MessageProps {
  id: string;
  message: string;
  user: {
    id: string;
    name: string;
    avatar_url?: string;
  };
}

interface MessageBoxProps {
  message: MessageProps;
}

export function MessageBox({ message }: MessageBoxProps) {
  return (
    <MessageContainer>
      <p>{message.message}</p>
      <InfoUser>
        <ImageBorder>
          <img src={message.user.avatar_url} alt={message.user.name} />
        </ImageBorder>
        <span>{message.user.name}</span>
      </InfoUser>
    </MessageContainer>
  );
}
