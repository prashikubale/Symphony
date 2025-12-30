import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Enhanced error logging for debugging
window.onerror = function(message, source, lineno, colno, error) {
  console.error('App Crash:', message, 'at', source, lineno, colno);
  const display = document.getElementById('error-display');
  if (display) {
    display.style.display = 'block';
    display.innerText = `Startup Error: ${message}\nLine: ${lineno}:${colno}`;
  }
};

console.log('Breeze: Initializing application...');

const rootElement = document.getElementById('root');
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('Breeze: App rendered successfully.');
  } catch (err: any) {
    console.error('Breeze: Render failure', err);
    const display = document.getElementById('error-display');
    if (display) {
      display.style.display = 'block';
      display.innerText = `Render Error: ${err.message}`;
    }
  }
} else {
  console.error('Breeze: Failed to find root element');
}