import React, { useEffect, useState } from 'react';
import styles from './../PortfolioCard/PortfolioCard.module.css';


const PortfolioCard = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setPortfolioData(data.portfolioData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <p className={styles.title}>Your Portfolio</p>
        <button className={styles.addButton}>+</button>
      </div>
      <div className={styles.portfolioList}>
        {portfolioData.map((item, index) => (
          <div key={index} className={styles.portfolioItem}>
           
            <div className={styles.details}>
              <span className={styles.cryptoName}>{item.name}</span>
              <span className={styles.cryptoAction}>{item.action}</span>
            </div>
            <div className={styles.amount} style={{ color: item.color }}>
              {item.amount > 0 ? `+${item.amount}` : item.amount} {item.symbol}
              <span className={styles.cryptoTime}>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
