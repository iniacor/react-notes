import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { NotesProvider } from './NotesContext';

const rootNode = document.querySelector('#root');
if (rootNode) {
  createRoot(rootNode).render(
    <React.StrictMode>
      <NotesProvider>
        <App />
      </NotesProvider>
    </React.StrictMode>
  );
}
