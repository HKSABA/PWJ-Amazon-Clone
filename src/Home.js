import React from "react";
import Product from "./Product"; 
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__slideshow">
          <figure>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR27znlLFhyT4AvNt8n25zlY28USUXdNbzS45TXY1ocArjV9fURH2chI4qM"
              alt=""
            />
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_FT_XSite_HeroTALL_3000x1200._CB433720308_.jpg"
              alt=""
            />
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/magellan/country/Italy/EvergreenRefresh/FromDec19/IT_Evergreen_Refresh_FT_XSite_HeroTALL_3000x1200._CB435562485_.jpg"
              alt=""
            />
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/placement/Gateway/launch/Upload_S1/UPLO_S1_FT_XSite_HeroTALL_1500x600._CB432763555_.jpg"
              alt=""
            />
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR27znlLFhyT4AvNt8n25zlY28USUXdNbzS45TXY1ocArjV9fURH2chI4qM"
              alt=""
            />
          </figure>
        </div>

        <div className="home__row">
          <Product
            id="42634560"
            title="Apple iPhone XR (64GB, (PRODUCT)RED)"
            price={649.99}
            rating={4}
            image="https://cdn.movertix.com/media/catalog/product/cache/image/1200x/a/p/apple-iphone-xr-64-gb-rojo-IPHXR64GBR.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation)| Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://www.thesource.ca/medias/20190926144729-108085276-A.jpg-mediaConversion-640-x-480-mediaConversion-400-x-300-0?context=bWFzdGVyfGltYWdlc3w0MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oYzgvaDFlLzkxODM0Njg0ODY2ODYuanBnfDkxNTNmNTk2YjdmOTY1ZTNmYWQ0OWU1NGY1MGVmMzk3NTBmOWZjMjVkZGY5NTQ5MmNhY2I3YmZiOWIzNzlmYWI"
          />
          <Product
            id="131243579"
            title="New Apple i-Pad Pro (12.9-inch, Wifi, 128 GB) - Silver (4th Generation)"
            price={598.99}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1583553704156"
          />
          <Product
            id="144265380"
            title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Gold"
            price={949.99}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1541713859040"
          />
        </div>

        <div className="home__row">
          <Product
            id="123213341"
            title="DeskCycle Ellipse: Under Desk Elliptical Machine - Mini Seated Exercise Equipment"
            price={179.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81CkKFn70ZL._AC_SL1500_.jpg"
          />
          <Product
            id="800206699"
            title="Bodum Chambord French Press Coffee and Tea Maker, 12 Ounce, Chrome"
            price={29.99}
            rating={4}
            image="https://thebeanbrewer.com/wp-content/uploads/2019/07/Bodum-1923-16US4-Chambord-French-Press-Coffee-and-Tea-Maker-12-Oz-Chrome-0-1.jpg"
          />
          <Product
            id="144265380"
            title="PUMA Women's Evercat Candidate Duffel"
            price={23.93}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/A1WPxfwrhYL._AC_UL1500_.jpg"
          />
          <Product
            id="78394112"
            title="Chânél Chance Eau Tendre Eau de Toilette Women Spray 1.7 Fl. OZ. / 50ML."
            price={121.0}
            rating={4}
            image="https://lh3.googleusercontent.com/proxy/ATZv-d1j7rKrd_pSX16zUZRCs7U9jHB5Lv7jiFQfCmKV2JS_x6dN-hs4Lj-tu2nHtfpxvjiWIiHl5qr5zljkSkRLo0x5O2wrJ2fxOdD-1wJBf1Q-OxsJ1sQwrI2KYHjzBLXCP6P_WBbg3v4UC9ZOES6Bt30"
          />
        </div>

        <div className="home__row">
          <Product
            id="199243546"
            title="Paint Brushes Set 15 Sizes Oil Acrylic Painting Brush Kit Professional"
            price={15.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/91lJhVjLweL.jpg"
          />
          <Product
            id="502390421"
            title="Games Workshop Warhammer 40,000 Command Edition Starter Box"
            price={159.95}
            rating={4}
            image="https://www.games-workshop.com/resources/catalog/product/920x950/60010199034_WH40KCommandEditionStock.jpg"
          />
          <Product
            id="35060014"
            title="Kasa Spot Indoor Camera by TP-Link, 1080p HD Smart Home Security Camera with Night Vision & Motion Detection"
            price={41.86}
            rating={5}
            image="https://images.homedepot-static.com/productImages/5871fba0-0996-4137-89b1-5c29459b2d2c/svn/white-tp-link-smart-security-cameras-kc100-64_1000.jpg"
          />
        </div>
      </div>
    </div>
  ); 
}

export default Home;
