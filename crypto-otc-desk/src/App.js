import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import FeaturedServices from './components/FeaturedServices';
import HowItWorks from './components/HowItWorks';
import './App.css';
import MarketData from './components/MarketData';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main>
        <section>
          <h2>Welcome to our OTC Desk</h2>
          <p>Buy and sell cryptocurrencies with ease.</p>
        </section>

        <section id="buy">
          <h2>Buy Cryptocurrency</h2>
          <p>Discover a seamless buying experience with our OTC desk.</p>
          {/* Add more details or features related to buying */}
        </section>

        <section id="sell">
          <h2>Sell Cryptocurrency</h2>
          <p>Sell your cryptocurrencies hassle-free on our platform.</p>
          {/* Add more details or features related to selling */}
        </section>

        <FeaturedServices />
        <HowItWorks />
        <MarketData />

      </main>
      <Footer />
    </div>
  );
}

export default App;
