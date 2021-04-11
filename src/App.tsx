import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/style/global';
import dark from './assets/style/themes/dark';
// import light from './assets/style/themes/light';

import { Dashboard } from './pages/DashBoard';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
}

export { App };

