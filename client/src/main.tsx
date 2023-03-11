import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import { Provider } from 'react-redux';
import { store } from './app/store';
import { WrappedApp } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <WrappedApp />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
