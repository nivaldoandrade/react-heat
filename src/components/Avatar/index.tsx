import { useAuth } from '../../hooks/useAuth';

import AvatarPlaceholder from '../../assets/avatar-placeholder.png';

import { AvatarContainer, ImageBorder } from './styles';

export function Avatar() {
  const { user, signOut } = useAuth();

  return (
    <AvatarContainer>
      {user && (
        <button type="button" onClick={signOut}>
          Sair
        </button>
      )}

      <ImageBorder>
        {!user ? (
          <img src={AvatarPlaceholder} alt="Avatar Placeholder" />
        ) : (
          <>
            <img src={user?.avatar_url} alt={user.name} />
          </>
        )}
      </ImageBorder>
    </AvatarContainer>
  );
}
