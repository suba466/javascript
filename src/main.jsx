import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousal from './Carousal.jsx'
import App from './App.jsx';
import Urban from './Urban.jsx';
import Task from './Task.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Task/>
  </StrictMode>
)
