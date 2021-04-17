import React from "react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/style/global';
import dark from './assets/style/themes/dark';
// import light from './assets/style/themes/light';
// import { LayoutDashBoard } from "./components/Layouts/LayoutDashBoard";
// import { LayoutLateral } from "./components/Layouts/LayoutLateral";
// import { LayoutLateral } from "./Layouts/LayoutLateral";

import { Dashboard } from './pages/DashBoard';
// import { Home } from "./pages/Home";
import { List } from "./pages/List";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
        <Dashboard>
          <List />
        </Dashboard>
    </ThemeProvider>
  );
}

export { App };

