import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
//import Quotefetcher from './Jokefetcher.jsx';
//import Regis from './Regis.jsx';
//import Useparam from './Useparam.jsx';
//import Articles from './Articles.jsx';
//import Uses from './Uses.jsx';
//import Nestedrouting from './Nestedrouting.jsx';
import Urban from './Urban'
//import Protect from './Protect.jsx';
//import Authen from './Authen.jsx'
//import Reduxdemo from './Reduxdemo.jsx'<Provider store={store}><Reduxdemo/></Provider>
//import { Provider } from 'react-redux';
//import {store} from './Store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Urban/>
    </BrowserRouter>
  </StrictMode>
);
