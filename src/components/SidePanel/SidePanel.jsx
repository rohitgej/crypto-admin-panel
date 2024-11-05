import React,{useEffect} from 'react'
import Styles from  './SidePanel.module.css'
import BitcoinCard from '../BitcoinCard/BitcoinCard'
import InvestmentCard from '../InvestmentCard/InvestmentCard'
import PortfolioCard from '../PortfolioCard/PortfolioCard'


function SidePanel({isDarkMode}) {
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty("--bg-color", "var(--dark-bg)");
      document.documentElement.style.setProperty("--text-color", "var(--text-light)");
    } else {
      document.documentElement.style.setProperty("--bg-color", "var(--light-bg)");
      document.documentElement.style.setProperty("--text-color", "var(--text-dark)");
    }
  }, [isDarkMode]);
  return (
    <div  className={Styles.SidePanel}>

    <BitcoinCard isDarkMode={isDarkMode}/>
    <InvestmentCard/>
    <PortfolioCard/>
    </div>
  )
}

export default SidePanel
