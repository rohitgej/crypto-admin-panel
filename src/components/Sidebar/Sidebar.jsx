import React, {useEffect} from "react";
import logo from "../../assets/logo.png";
import styles from "./Sidebar.module.css";
import logo2 from "../../assets/logo2.jpg"
import { TbLayoutDashboardFilled, TbWallet, TbReceipt, TbPackages, TbMessageDots, TbArrowsSort, TbSettings,TbBrandPocket } from "react-icons/tb";
import {
  CiLogout,
} from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

function Slidebar({ toggleSidebar, isDarkMode}) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
    <div className={styles.Slidebar}>
      <div>
      <div className={styles.logoSection}>
        <div className={styles.LogoSec}>
          <img className={styles.logo} src={isDarkMode?logo:logo2} alt="logo" />

          <button onClick={toggleSidebar} className={styles.crossBtn}>&times;</button>
          </div>
        </div>

        <div className={styles.menuSection}>
          <h6>MENU</h6>
          <ul>
          <li className={isActive("/") ? styles.active : ""}>
              <Link to="/">
                <div className={styles.icon}>
                  <TbLayoutDashboardFilled />
                </div>
                Dashboard
              </Link>
            </li>
            <li className={isActive("/my-wallet") ? styles.active : ""}>
              <Link to="/my-wallet">
                <div className={styles.icon}>
                  <TbWallet />
                </div>
                My Wallet
              </Link>
            </li>
            <li className={isActive("/transactions") ? styles.active : ""}>
              <Link to="/transactions">
                <div className={styles.icon}>
                  <TbReceipt />
                </div>
                Transactions
              </Link>
            </li>
            <li className={isActive("/crypto") ? styles.active : ""}>
              <Link to="/crypto">
                <div className={styles.icon}>
                  <TbPackages />
                </div>
                Crypto
              </Link>
            </li>
            <li className={isActive("/message") ? styles.active : ""}>
              <Link to="/message">
                <div className={styles.icon}>
                  <TbMessageDots />
                </div>
                Message
              </Link>
            </li>
            <li className={isActive("/exchange") ? styles.active : ""}>
              <Link to="/exchange">
                <div className={styles.icon}>
                  <TbArrowsSort />
                </div>
                Exchange
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.generalSection}>
          <h6>GENERAL</h6>
          <ul>
            <li>
              <a href="/setting">
              <div className={styles.icon}>
                <TbSettings />
                </div>
                Setting
              </a>
            </li>
            <li>
              <a href="/security">
              <div className={styles.icon}>
                <TbBrandPocket />
                </div>
                Security
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.logout}>
          <hr />
          <button className={styles.logoutButton}>
            <div className={styles.profile}></div>
            <div className={styles.profileDetails}>
            <div>Erick Tohit</div>
            <div>ericktohit@gmail.com</div>
            </div>
             <CiLogout className={styles.logoutIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Slidebar;
