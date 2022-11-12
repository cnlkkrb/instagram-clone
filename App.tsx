import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/theme/theme';
import NotSignInNavigator from './src/navigations/NotSignInNavigator';
import SignInNavigator from './src/navigations/SignInNavigator';
import { useAtom } from 'jotai';
import { loggedInAtom } from './src/utils/atom';

const App = () => {
  const [loggedIn, setLoggedIn] = useAtom(loggedInAtom);
  return (
    <>
      {loggedIn ? <SignInNavigator /> : <NotSignInNavigator />}
    </>
  );
};

const AppRoot = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default AppRoot;
