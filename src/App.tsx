import React from 'react';
import './app/styles/base.sass';
import { ThemeProvider } from './app/lib/ThemeProvider';
import { LocalisationProvider } from './app/lib/LocalisationProvider';
import './app/config/i18n/settings';
import { Navigation } from './pages/Navigation';

function App() {
  return (
    <>
      <LocalisationProvider />
      <ThemeProvider>
        <div className="App">
          <Navigation />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
