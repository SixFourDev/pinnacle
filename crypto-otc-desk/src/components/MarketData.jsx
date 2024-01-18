import React, { useState, useEffect } from 'react';

const MarketData = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // Fetch cryptocurrency data from CoinGecko API
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana',
          {
            method: 'GET',
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="market-data">
      <h2>Market Data</h2>
      <ul>
        {cryptoData.map(crypto => (
          <li key={crypto.id}>
            <img
              src={`https://c1.coinlore.com/img/25x25/${crypto.id}.png`}
              alt={`${crypto.id} icon`}
              style={{ width: '24px', height: '24px', marginRight: '8px' }}
            />
            {crypto.id.charAt(0).toUpperCase() + crypto.id.slice(1)}: ${crypto.current_price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MarketData;
