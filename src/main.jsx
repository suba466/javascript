import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Regis from './Regis.jsx';
//import Useparam from './Useparam.jsx';
//import Articles from './Articles.jsx';
//import Uses from './Uses.jsx';
//import Nestedrouting from './Nestedrouting.jsx';

//import Protect from './Protect.jsx';
import Authen from './Authen.jsx'
import Fsdemo from './Fsdemo.jsx';
import Productlist from './Productlist.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Productlist/>
    </BrowserRouter>
  </StrictMode>
);
