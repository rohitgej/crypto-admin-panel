import React, { useEffect, useState } from "react";
import styles from "./RecentTran.module.css";
import { FaEthereum } from "react-icons/fa";
import { SiCardano, SiGrapheneos, SiPolkadot } from "react-icons/si";
import { LuBitcoin } from "react-icons/lu";

const CryptoList = ({ searchQuery="" }) => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setCryptoData(data.cryptoData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredCryptoData = cryptoData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.cryptoList}>
      {filteredCryptoData.map((item) => (
        <div key={item.id} className={styles.cryptoItem}>
          <div className={styles.cryptoInfo}>
            <div className={styles.cryptoIcon}>
              {item.name === "Bitcoin" && <LuBitcoin color="white" size={24} />}
              {item.name === "Ethereum" && <FaEthereum color="white" size={24} />}
              {item.name === "Cardano" && <SiCardano color="white" size={24} />}
              {item.name === "EOS" && <SiGrapheneos color="white" size={24} />}
              {item.name === "Polkadot" && <SiPolkadot color="white" size={24} />}
            </div>
            <div className={styles.cryptoText}>
              <div className={styles.cryptoName}>{item.name}</div>
              <div className={styles.cryptoSymbol}>{item.symbol}</div>
            </div>
          </div>

          <div className={styles.marketInfo}>
            <div className={styles.marketCapLabel}>Market Cap</div>
            <div className={styles.marketCapValue}>{item.marketCap}</div>
          </div>

          <div className={`${styles.changeValue} ${item.change.startsWith("-") ? styles.negative : styles.positive}`}>
            {item.change}
          </div>

          <div className={styles.trendIcon}>
            {item.trend === "up" ? (
              <div className={styles.upTrend}>
                <svg viewBox="0 0 100 50">
                  <polyline
                    fill="none"
                    stroke="#00FF00"
                    strokeWidth="1"
                    points="0,30 10,28 20,26 30,25 40,24 50,22 60,20 70,22 80,18 90,15 100,10"
                  />
                </svg>
              </div>
            ) : (
              <div className={styles.upTrend}>
                <svg viewBox="0 0 100 50">
                  <polyline
                    fill="none"
                    stroke="#FF0000"
                    strokeWidth="1"
                    points="0,10 10,12 20,15 30,18 40,20 50,25 60,28 70,30 80,32 90,35 100,40"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.sellButton}>Sell</button>
            <button className={styles.buyButton}>Buy</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
