import React from 'react';
import './App.css';

// import Global from './components/Nav/01-Global';
import HeaderImg from './components/HeaderImg';
import Global from './components/Nav/01-Global';
import TopInfo from './components/Nav/02-Top Info';
import Footer from './components/Footer';
//////////////////////
import headerImg from '../src/images/8402c0f4f134ac3da6567d064219651be69fb559.png'
import ProductListing from './components/ProductListing';
export default function Page2() {
    const headerImgData = {
        title: 'Apparels',
        description: 'White Gold began gaining popularity in the early 1900’s as an alternative to platinum.',
        img: headerImg
    };
    return (
        <>
            <div className='header-container'>
                <TopInfo />
                <Global />
            </div>
            <HeaderImg title={headerImgData.title} description={headerImgData.description} img={headerImgData.img} />
            <div className='main-container'>
                {/* <SortSection /> */}
                {/* <NewArrivals /> */}
                <ProductListing />
            </div>
            <div className='footer-container'>
                <Footer />
            </div>
        </>
    )
}
