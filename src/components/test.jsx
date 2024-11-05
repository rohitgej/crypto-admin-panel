import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Sidebar.module.css";
import {
  TbLayoutDashboardFilled,
  TbWallet,
  TbReceipt,
  TbPackages,
  TbMessageDots,
  TbArrowsSort,
  TbSettings,
  TbBrandPocket,
} from "react-icons/tb";
import { CiLogout } from "react-icons/ci";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={styles.Sidebar}>
      <div>
        <div className={styles.LogoSec}>
          <img className={styles.logo} src={logo} alt="logo" />
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
            <li className={isActive("/setting") ? styles.active : ""}>
              <Link to="/setting">
                <div className={styles.icon}>
                  <TbSettings />
                </div>
                Setting
              </Link>
            </li>
            <li className={isActive("/security") ? styles.active : ""}>
              <Link to="/security">
                <div className={styles.icon}>
                  <TbBrandPocket />
                </div>
                Security
              </Link>
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

export default Sidebar;
