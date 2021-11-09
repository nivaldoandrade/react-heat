import { AuthContextProvider } from './hooks/useAuth';
import { Home } from './pages/Home';

export function App() {
  return (
    <AuthContextProvider>
      <Home />
    </AuthContextProvider>
  );
}
