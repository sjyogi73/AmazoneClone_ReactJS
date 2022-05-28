import React from 'react'
import "./Home.css"

//Dynamic Product Details
import Product from './Product';

const Home=()=>{
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://wjmediagroup.com/wp-content/uploads/2021/07/1-1.jpg" 
                alt="Banner__Image" 
                className='home__image'/>


            <div className="home__row"  >
            <Product
                    id="49538096"
                    title="Newly Launched Boult Audio AirBass Propods X TWS Earbuds,"
                    price={1000}
                    rating={0}
                    image="https://m.media-amazon.com/images/I/61PxL+XfKCL._SL1500_.jpg"
                />
                <Product
                    id="49538090"
                    title="Yale Smart Lock Pro & Connect- Alexa Enabled Smart Door Lock  "
                    price={1000}
                    rating={1}
                    image="https://m.media-amazon.com/images/I/41EvJAgLA4S._SL1100_.jpg"
                />
                <Product
                    id="49538091"
                    title="boAt Rockerz 370 Bluetooth Wireless On Ear Headphone with Mic "
                    price={8000}
                    rating={1}
                    image="https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg"
                />
            </div>
          
            <div className="home__row">
                <Product
                    id="49538094"
                title="boAt PartyPal 50 20W Portable Stereo Speaker with RGB LEDs,"
                price={9000}
                rating={1}
                image="https://m.media-amazon.com/images/I/61bq0ILE5CL._SL1500_.jpg" />

                <Product
                    id="49538099"
                    title="Mi 360° Home Security Camera 1080P l Full HD Picture l AI"
                    price={12000}
                    rating={1}
                    image="https://m.media-amazon.com/images/I/61JM7nC4OKL._SL1500_.jpg"
                />
                <Product 
                    id="12321341"
                    title="IBS Mini Spy WiFi Magnetic HD 1080P Wireless Security Camera"
                    price={5000}
                    rating={0}
                    image="https://m.media-amazon.com/images/I/61SnE54k0QL._SL1500_.jpg"
                />
            </div>
           
            <div className="home__row">
            <Product 
                    id="12321340"
                    title="
                    i GEAR Retro Classic Vintage Radio with FM/AM/SW Band, Bluetooth SpeakerBluetooth "
                    price={8000}
                    rating={1}
                    image="https://m.media-amazon.com/images/I/91qMqdAciKL._SL1500_.jpg"

                />
                <Product 
                    id="12321348"
                    title="
                    Noizzy Box Retro XXL 4 Band Radio Wireless Bluetooth Speaker with Remote and Equalizer"
                    price={8000}
                    rating={1}
                    image="https://m.media-amazon.com/images/I/51IA-OG6CIL.jpg"

                />
                <Product 
                    id="12321349"
                    title="Clavier Fusion Portable Bluetooth Speaker, Bluetooth 5.0 Wireless Speakers with HD Sound"
                    price={8000}
                    rating={1}
                    image="https://m.media-amazon.com/images/I/51Lx9WAsIBL._SL1010_.jpg"

                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home