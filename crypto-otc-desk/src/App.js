import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <h2>Welcome to our OTC Desk</h2>
          <p>Buy and sell cryptocurrencies with ease.</p>
        </section>
        {/* More sections for features, services, etc. */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
