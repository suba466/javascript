import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Loading} from './Loading.jsx'
//import Axios from './Axios.jsx';
//import  Minitask from './Minitask.jsx';
//import Quotefetcher from './Jokefetcher.jsx';
//import Fetchmovie from './Fetchmovie.jsx';
//import Regis from './Regis.jsx';
//import Useparam from './Useparam.jsx';
//import Articles from './Articles.jsx';
//import Uses from './Uses.jsx';
//import Nestedrouting from './Nestedrouting.jsx';
//import Protect from './Protect.jsx';
//import Authen from './Authen.jsx'
//import Reduxdemo from './Reduxdemo.jsx'<Provider store={store}><Reduxdemo/></Provider>
//import { Provider } from 'react-redux';
//import {store} from './Store.js';
import Fulldemoapi from './Fulldemoapi.jsx';
import Fsdemo from './Fsdemo.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Fsdemo/>
    </BrowserRouter>
  </StrictMode>
);
