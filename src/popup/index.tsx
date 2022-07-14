import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.createElement('div');
container.id = 'root';
document.body.appendChild(container);
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
