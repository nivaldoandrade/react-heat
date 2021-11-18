import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

interface AuthContextProps {
  githubSignIn: string;
  user: User | null;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthUser {
  token: string;
  user: {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
  };
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const token = localStorage.getItem('@dowhile2021:token');

    const user = localStorage.getItem('@dowhile2021:user');

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      return JSON.parse(user);
    }

    return null;
  });

  const githubSignIn = `https://github.com/login/oauth/authorize?client_id=${
    import.meta.env.VITE_GITHUB_CLIENT_ID
  }`;

  async function AutheticateUser(githubCode: string) {
    const response = await api.post<AuthUser>('/authenticate', null, {
      params: {
        code: githubCode,
      },
    });

    localStorage.setItem('@dowhile2021:token', response.data.token);
    localStorage.setItem('@dowhile2021:user', JSON.stringify(response.data.user));

    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

    setUser(response.data.user);
  }

  useEffect(() => {
    const currentUrl = window.location.href;

    if (currentUrl.includes('code')) {
      const [url, githubCode] = currentUrl.split('?code=');

      window.history.pushState({}, '', url);

      AutheticateUser(githubCode);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@dowhile2021:token');
    localStorage.removeItem('@dowhile2021:user');

    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ githubSignIn, user, signOut }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
