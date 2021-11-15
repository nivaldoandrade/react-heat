import { FormEvent, useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import api from '../../services/api';

import { Button, FormModal } from './styles';

export function ButtonMessage() {
  const { user } = useAuth();

  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [modalRef, isOpen]);

  function toggleModal() {
    setIsOpen(state => !state);
  }

  async function handleSendMessage(e: FormEvent) {
    e.preventDefault();

    if (message.trim() === '') {
      return;
    }

    await api.post('message', { message });

    setMessage('');
  }

  return (
    <>
      {!isOpen && (
        <Button type="button" onClick={toggleModal}>
          ENVIAR MENSAGEM
        </Button>
      )}
      {user && (
        <FormModal isOpen={isOpen} ref={modalRef}>
          <form onSubmit={handleSendMessage}>
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
          </form>
        </FormModal>
      )}
    </>
  );
}
