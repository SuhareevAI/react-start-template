import React, { useEffect } from 'react';
import './app/styles/base.sass';
import { ThemeProvider } from './app/lib/ThemeProvider';
import { LocalisationProvider } from './app/lib/LocalisationProvider';
import './app/config/i18n/settings';
import { Navigation } from './pages/Navigation';
import { useDispatch } from 'react-redux';
import { programActions } from './app/redux/program';
import { ApolloProvider } from '@apollo/client';
import client from './app/lib/client';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(programActions.initialise());
  }, [dispatch]);

  return (
    <>
      <ApolloProvider client={client}>
        <LocalisationProvider />
        <ThemeProvider>
          <div className="App">
            <Navigation />
          </div>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
