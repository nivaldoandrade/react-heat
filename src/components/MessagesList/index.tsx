import { useEffect, useState } from 'react';

import { MessageBox } from '../MessageBox';

import api from '../../services/api';

import { MessagesListContainer } from './styles';

interface MessageProps {
  id: string;
  message: string;
  user: {
    id: string;
    name: string;
    avatar_url?: string;
  };
}

export function MessagesList() {
  const [last3Messages, setLast3Messages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function getLast3Messages() {
      const response = await api.get<MessageProps[]>('/last3messages');

      const messagesFormatted = response.data.map(message => {
        return {
          id: message.id,
          message: message.message,
          user: {
            id: message.user.id,
            name: message.user.name,
            avatar_url: message.user.avatar_url,
          },
        };
      });

      setLast3Messages(messagesFormatted);
    }

    getLast3Messages();
  }, []);

  return (
    <MessagesListContainer>
      {last3Messages &&
        last3Messages.map(message => <MessageBox key={message.id} message={message} />)}
    </MessagesListContainer>
  );
}
