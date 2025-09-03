import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


//import Urban from './Urban.jsx';<BrowserRouter><Urban/></BrowserRouter>
//import Reducertask from './Reducertask.jsx';<Reducertask/>
import LoginForm from './Loginform.jsx';
import Form from './Form.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Form/>
  </StrictMode>
);
