import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


//import Urban from './Urban.jsx';<BrowserRouter><Urban/></BrowserRouter>
//import Reducertask from './Reducertask.jsx';<Reducertask/>

//import Form from './Form.jsx';
import Useform from './Useform.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Useform/>
  </StrictMode>
);
