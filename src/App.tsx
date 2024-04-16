import React from 'react';
import './app/styles/base.sass';
import { Layout } from './shared/ui/Layout/Layout';
import { ThemeProvider } from './app/lib/ThemeProvider';
import { LocalisationProvider } from './app/lib/LocalisationProvider';
import './app/config/i18n/settings';

function App() {
  return (
    <>
      <LocalisationProvider />
      <ThemeProvider>
        <div className="App">
          <Layout/>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
