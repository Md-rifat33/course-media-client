import { createContext, ReactNode, useContext, useReducer } from 'react';

type ThemeActions = { type: 'UPDATE_THEME'; payload: { name: 'winter' | 'dracula' } };

type ThemeState =
  | {
      state: 'dracula';
    }
  | {
      state: 'winter';
    };

const ThemeReducer = (state: ThemeState, action: ThemeActions): ThemeState => {
  switch (action.type) {
    case 'UPDATE_THEME':
      return {
        state: action.payload.name,
      };
  }
};

type ThemeContextProps = {
  state: ThemeState;
  dispatch: (value: ThemeActions) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({ state: { state: 'winter' }, dispatch: (val) => {} });

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(ThemeReducer, { state: 'winter' });

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

const useThemeState = () => {
  const { state } = useContext(ThemeContext);
  return {
    state,
  };
};

const useTheme = () => {
  const { dispatch } = useContext(ThemeContext);
  return {
    useLightTheme: () => {
      return dispatch({ type: 'UPDATE_THEME', payload: { name: 'winter' } });
    },
    useDarkTheme: () => {
      return dispatch({ type: 'UPDATE_THEME', payload: { name: 'dracula' } });
    },
  };
};

export { useThemeState, useTheme, ThemeProvider };
