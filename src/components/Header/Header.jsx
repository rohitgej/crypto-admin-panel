import React,{useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { CiCloudSun, CiCloudMoon } from "react-icons/ci";
import { MdOutlineBubbleChart } from "react-icons/md";
import { TbAlignLeft } from "react-icons/tb";
import styles from "./Header.module.css";
import '../../Styles/typography.css';

function Header({ toggleSidebar, isSidebarVisible, setSearchQuery, isDarkMode, toggleTheme }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
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
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <TbAlignLeft onClick={toggleSidebar} className={styles.optionIcon} />
        <h4>Dashboard</h4>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search recent tran..."
            className={styles.input}
            onChange={handleSearchChange}
          />
          <button type="submit" className={styles.button}>
            <div className={styles.icon}>
              <FaSearch />
            </div>
          </button>
        </div>
      </div>

      <div className={styles.headerRight}>
        <button className={styles.themeIcon} onClick={toggleTheme}>
          {isDarkMode ? <CiCloudSun /> : <CiCloudMoon />}
        </button>

        <button className={styles.extraIcon}>
          <MdOutlineBubbleChart />
        </button>

        <button className={styles.AddButton}>
          <p>Add new coin</p>
          <FaCirclePlus />
        </button>
      </div>
    </div>
  );
}

export default Header;
