import React from "react";
import {ThemeProvider} from '@shopify/restyle';
import theme from "./src/theme/theme";
import NotSignInNavigator from "./src/navigations/NotSignInNavigator";

const App = () => {
  return(
    <NotSignInNavigator />
  )
}

const AppRoot = () => {
  return(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  )
}

export default AppRoot;