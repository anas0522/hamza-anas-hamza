import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  useRoutes,
  NavLink,
  Routes,
  BrowserRouter,
} from "react-router-dom";
// import Global from './components/Nav/01-Global';
import About from './components/About';
import NewArrivals from './components/NewArrivals';
import Shop from './components/Shop';
import ReactDOM from "react-dom/client";
import Videos from './components/Videos';
import AsSeenOn from './components/AsSeenOn';
import SortSection from './components/SortSection';
import Slider from './components/Slider';
import Explore from './components/Explore';
import HeaderImg from './components/HeaderImg';
import Global from './components/Nav/01-Global';
import TopInfo from './components/Nav/02-Top Info';
import Footer from './components/Footer';
//////////////////////
import headerImg from '../src/images/8402c0f4f134ac3da6567d064219651be69fb559.png'
import ProductListing from './components/ProductListing';

import Page1 from './page1';
import Page2 from "./Page2"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Page1 />}/>
            <Route exact path="/path" element={<Page2 />} />
            {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
