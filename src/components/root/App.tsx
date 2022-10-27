import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '~/components/contexts/UserContext';
import Main from '~/components/root/Main';
import { ThemeProvider } from '~/components/contexts/ThemeContext';

export const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};
