import React, { useEffect, useState } from "react";
import classNames from "./BitcoinCard.module.css"; 
import { IoMdArrowDropup } from "react-icons/io";
import { IoRefreshOutline } from "react-icons/io5";
import { MdCurrencyBitcoin } from "react-icons/md";

function BitcoinCard({isDarkMode}) {
  const [coin, setCoin] = useState("BTC");
  const [price, setPrice] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty("--bg-color", "var(--dark-bg)");
      document.documentElement.style.setProperty("--text-color", "var(--text-light)");
    } else {
      document.documentElement.style.setProperty("--bg-color", "var(--light-bg)");
      document.documentElement.style.setProperty("--text-color", "var(--text-dark)");
    }
  }, [isDarkMode]);

  
  const coinNames = {
    BTC: "Bitcoin",
    ETH: "Ethereum",
    LTC: "Litecoin",

  };

  const handleCoinApi = async () => {
    try {
      const response = await fetch(
        `https://api.coinbase.com/v2/exchange-rates?currency=${coin}`
      );
      if (!response.ok) {
        throw new Error("Network issue");
      }
      const data = await response.json();
      

      setPrice(data.data.rates["USD"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleCoinApi();
  }, [coin]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCoinSelection = (selectedCoin) => {
    setCoin(selectedCoin);
    setIsDropdownOpen(false);
  };

  return (
    <div className={classNames.cardContainer}>
      <div className={classNames.header}>
        <div className={classNames.firstsec}>
          <div className={classNames.logoContainer}>
          <MdCurrencyBitcoin   className={classNames.logo}/>
          </div>
          <div className={classNames.titleContainer}>
            <p className={classNames.cryptoName}>{coinNames[coin]}</p>
            <span className={classNames.cryptoSymbol}>{coin}</span>
          </div>
        </div>

        <div className={classNames.icons}>
          <div onClick={toggleDropdown}>
            <IoMdArrowDropup className={classNames.icons1} />
          </div>
          <div>
            <IoRefreshOutline className={classNames.icons2} onClick={handleCoinApi} />
          </div>
        </div>
        
        {isDropdownOpen && (
          <div className={classNames.dropdown}>
            <p onClick={() => handleCoinSelection("BTC")}>Bitcoin (BTC)</p>
            <p onClick={() => handleCoinSelection("ETH")}>Ethereum (ETH)</p>
            <p onClick={() => handleCoinSelection("LTC")}>Litecoin (LTC)</p>
          
          </div>
        )}
      </div>
      
      <div className={classNames.priceContainer}>
        <h4 className={classNames.price}>
          ${price ? parseFloat(price).toLocaleString() : "Loading..."}
        </h4>
        <div className={classNames.chartContainer}>
          <svg className={classNames.chart} viewBox="0 0 100 50">
            <polyline
              fill="none"
              stroke="#00FF00"
              strokeWidth="1"
              points="0,30 20,25 40,30 60,20 80,35 100,25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default BitcoinCard;
