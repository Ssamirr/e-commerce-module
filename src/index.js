import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import ProductContext from './context/ProductContext';
import theme from './components/Theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <ProductContext>
      <App />
    </ProductContext>
  </ChakraProvider>
);

