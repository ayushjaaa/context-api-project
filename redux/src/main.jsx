import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'; // Import Provider
import { store } from './Store/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}></Provider>
)
