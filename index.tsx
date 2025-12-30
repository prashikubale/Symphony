
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Global error handler for easier debugging in the browser console
window.onerror = function(message, source, lineno, colno, error) {
  console.error('App Crash:', message, 'at', source, lineno, colno);
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find root element');
}
