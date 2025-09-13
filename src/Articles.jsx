import { Route, Routes } from "react-router-dom";
import Articlelist from './Articlelist.jsx';

const Articles = () => {
  return (
    <Routes>
      <Route path="/articlelist" element={<Articlelist />} />
    </Routes>
  );
};

export default Articles;
