import React, { useState, useEffect } from 'react';
import styles from '../InvestmentCard/InvestmentCard.module.css';

const InvestmentCard = () => {
  const [data, setData] = useState([]);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.investmentData))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const showTooltip = (event, text) => {
    const rect = event.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      text: text,
    });
  };

  const hideTooltip = () => {
    setTooltip({ visible: false, x: 0, y: 0, text: '' });
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <div>
          <h4 className={styles.amount}>$1029.37</h4>
          <span className={styles.dateRange}>Oct 2023 - Feb 2024</span>
        </div>
        <div className={styles.details}>
          <h3 className={styles.label}>Return On Investment</h3>
          <div className={styles.timeframeButton}>Last 6m</div>
        </div>
      </div>
      <div className={styles.chartContainer}>
        {data.map((item, index) => (
          <div
            key={index}
            className={styles.chartBar}
            onMouseEnter={(e) => showTooltip(e, `Avg +8.43%`)}
            onMouseLeave={hideTooltip}
          >
            <div className={styles.bar}
              style={{
                height: `${item.value}%`,
                backgroundColor: item.value > 50 ? '#00FF00' : '#555',
              }}
            />
            <span className={styles.monthLabel}>{item.month}</span>
          </div>
        ))}
      </div>

      {tooltip.visible && (
        <div className={styles.tooltip} style={{ left: tooltip.x, top: tooltip.y }}>
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default InvestmentCard;
