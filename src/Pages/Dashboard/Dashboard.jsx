import React, {useEffect} from 'react'
import styles from  './Dashboard.module.css'
import  RecentTran from './../../components/RecentTran/RecentTran'
import Chart from '../../components/Charts/Chart'
function Dashboard({ searchQuery, isDarkMode,}) {
  console.log(searchQuery);

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
    <div className={styles.dashboard}>
      <div className={styles.chartSection}>
        <Chart />
      </div>
      <div className={styles.recentTran}>
        <h5>Recent Transactions</h5>
        <RecentTran searchQuery={searchQuery}  />
      </div>
      <div className={styles.shades}></div>
       </div>
  )
}

export default Dashboard
