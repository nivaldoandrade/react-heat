import { useEffect, useState } from 'react';
import io from 'socket.io-client';

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

const messagesQueue = [] as MessageProps[];

const socket = io('http://localhost:3333');

socket.on('message', (message: MessageProps) => {
  messagesQueue.push(message);
});

export function MessagesList() {
  const [last3Messages, setLast3Messages] = useState<MessageProps[]>([]);

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setLast3Messages(state => [messagesQueue[0], state[0], state[1]].filter(Boolean));

        messagesQueue.shift();
      }
    }, 3000);
  }, []);

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
