import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="" />
        
        {/* product */}
        <div className="home__row">
        <Product id="12121" title="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION) Hardcover – 1 December 2019" price={11.96} rating={2} image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._SX322_BO1,204,203,200_.jpg" />
        <Product id="342122" title="pTron Bassbuds in-Ear True Wireless Bluetooth Headphones (TWS) with Mic - (Black)" price={20.22} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51jGCELP5zL._SL1100_.jpg" />
        </div>

        <div className="home__row">
        <Product id="145126" title="TDisano Extra Light Olive Oil, 2L" price={1.96} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/41McOmr6r1L._AC_UL369_SR285,369_FMwebp_QL65_.jpg" />
        <Product id="782124" title="ASGARD Day & Date Feature Watch for Men, Boys-158-DD1" price={1.96} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/41XdRy2BxfL._UY445_.jpg" />
        <Product id="565625" title="Amazon Brand - Solimo Non-Washable N95 Anti-Pollution Mask, Set of 5" price={1.96} rating={3} image="https://m.media-amazon.com/images/I/61p3GdY3ZoL._AC_UL480_FMwebp_QL65_.jpg" />
        </div>

        <div className="home__row">
        <Product id="153423" title="HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop (8GB/1TB HDD/M.2 Slot/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black), 15-dk0264TX" price={399} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg" />
        </div>
        </div>

    )
}

export default Home
