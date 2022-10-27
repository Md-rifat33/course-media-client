import { Router } from '~/components/router/Router';
import { setupFirebase } from '~/lib/firebase';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSignIn, useSignOut } from '~/components/contexts/UserContext';
import { useThemeState } from '~/components/contexts/ThemeContext';

function Main() {
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();
  const {
    state: { state: themeName },
  } = useThemeState();
  useEffect(() => {
    setupFirebase();

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        signIn(user);
      } else {
        signOut();
      }
    });
  }, []);

  return (
    <main data-theme={themeName}>
      <Router />
    </main>
  );
}

export default Main;
