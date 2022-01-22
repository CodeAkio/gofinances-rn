import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './global/styles/theme';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
