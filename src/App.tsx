import React from 'react';
import './app/styles/base.sass';
import { Layout } from './shared/ui/Layout/Layout';
import { ThemeProvider } from './app/lib/ThemeProvider';
import { LocalisationProvider } from './app/lib/LocalisationProvider';
import './app/config/i18n/settings';
import { ProductList } from './widgets/ProductList/ui/ProductList';

function App() {
  return (
    <>
      <LocalisationProvider />
      <ThemeProvider>
        <div className="App">
          <Layout />
          <ProductList />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
