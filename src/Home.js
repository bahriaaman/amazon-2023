import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
            className='home__image'
            src='https://m.media-amazon.com/images/I/7191th9dBnL._SX3000_.jpg'
            alt=''
            />
            <div className='home__row'>
                <Product id="12321341"
                          title="Kitchen in the box Stand Mixer,3.2Qt Small Electric Food Mixer,6 Speeds Portable Lightweight Kitchen Mixer for Daily Use with Egg Whisk,Dough Hook,Flat Beater (Pink)"
                    price={79}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/61oPH4B-GeL._AC_SS250_.jpg'
                    />
                <Product
                  id="45621341"
                  title="Ninja CFP307 DualBrew Pro Specialty Coffee System, Single-Serve, Compatible with K-Cups & 12-Cup Drip Coffee Maker, with Permanent Filter Black"
            price={179}
            rating={5}
            image='https://m.media-amazon.com/images/I/81-vMuZ92ZL._AC_SL1500_.jpg' 
                />

            </div>
            <div className='home__row'>
                <Product
                    id="45538094"
                    title="Amazon Fire 7 tablet, 7” display, read and watch, under $60 with 10-hour battery life, (2022 release), 16 GB, Black"
              price={59}
              rating={4}
              image="https://m.media-amazon.com/images/I/51092zEMKaL._AC_UY218_.jpg" 
                />
                <Product 
                    id="98756412"
                    title="Hamdol Remote Control Car Double Sided 360°Rotating 4WD RC Cars with Headlights 2.4GHz Electric Race Stunt Toy Car Rechargeable Toy Cars for Boys Girls Birthday (Blue)"
              price={23}
              rating={5}
              image='https://m.media-amazon.com/images/I/81-aqqH-vpL._AC_SX679_.jpg'
                />
                <Product 
                id="54312789"
                title="Introducing Echo Pop | Full sound compact smart speaker with Alexa | Charcoal"
          price={17}
          rating={3}
          image='https://m.media-amazon.com/images/I/71nsXVE5zDL._AC_SY355_.jpg'
                />
            </div>
            <div className='home__row'>
                <Product  
                  id="78912345"
                  title="SAMSUNG 85-Inch Class QLED 4K UHD Q70A Series Dual LED Quantum HDR, Motion Xcelerator Turbo+ 
                  Multi View Screen, Smart TV with Alexa Built-In (QN85Q70AAFXZA)"
            price={1000}
            rating={5}
            image='https://m.media-amazon.com/images/I/81fWbLbFP7L._AC_SL1500_.jpg'
                />
              </div>
          </div>
        </div>
  )
}

export default Home
























