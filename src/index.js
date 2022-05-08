import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>
);