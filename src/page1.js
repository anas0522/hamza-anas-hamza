import React from 'react';
import './App.css';

// import Global from './components/Nav/01-Global';
import About from './components/About';
import NewArrivals from './components/NewArrivals';
import Shop from './components/Shop';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Videos from './components/Videos';
import AsSeenOn from './components/AsSeenOn';
import SortSection from './components/SortSection';
import Slider from './components/Slider';
import Explore from './components/Explore';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderImg from './components/HeaderImg';
import Global from './components/Nav/01-Global';
import TopInfo from './components/Nav/02-Top Info';
import Footer from './components/Footer';
//////////////////////
import headerImg from '../src/images/8402c0f4f134ac3da6567d064219651be69fb559.png'
import ProductListing from './components/ProductListing';
export default function Page1() {
    return (
        <>
            <div className='header-container'>
                <TopInfo />
                <Global />
            </div>
            <Slider />
            <div className='main-container'>
                <NewArrivals />
                <About />
                <Explore />
                <Shop />
                <Videos />
                <AsSeenOn />
            </div>
            <div className='footer-container'>
                <Footer />
            </div>
            <div>
                <Link refresh to="/path">
                    <button type="button">Next</button>

                </Link>
            </div>
        </>
    )

}
