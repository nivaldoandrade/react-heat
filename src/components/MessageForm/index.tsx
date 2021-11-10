import { FormEvent, useState } from 'react';
import { VscSignIn, VscGithubInverted } from 'react-icons/vsc';

import { useAuth } from '../../hooks/useAuth';
import api from '../../services/api';

import BuildImg from '../../assets/build.png';

import { MessageFormWrapper } from './styles';

export function MessageForm() {
  const [message, setMessage] = useState('');

  const { user, signOut } = useAuth();

  async function handleSendMessage(e: FormEvent) {
    e.preventDefault();

    if (message.trim() === '') {
      return;
    }

    await api.post('message', { message });

    setMessage('');
  }

  return (
    <MessageFormWrapper>
      <img src={BuildImg} alt="Build the Future" />
      <button type="button" onClick={signOut}>
        <VscSignIn size={32} />
      </button>
      <header>
        <div>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong>{user?.name}</strong>
        <span>
          <VscGithubInverted size={16} />
          {user?.login}
        </span>
      </header>
      <form onSubmit={handleSendMessage}>
        <label htmlFor="message">Mensagem</label>

        <div>
          <textarea
            name="message"
            rows={3}
            wrap="hard"
            id="message"
            placeholder="Qual sua expectativa para o evento?"
            onChange={e => setMessage(e.target.value)}
            value={message}
          />

          <button type="submit">ENVIAR MESSAGE</button>
        </div>
      </form>
    </MessageFormWrapper>
  );
}
