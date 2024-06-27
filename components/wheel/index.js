'use client';

import { useState, useEffect } from 'react';
import Card from "../card/card";
import styles from './Wheel.module.css';

const Wheel = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const fn = () => {
      setActiveCard(null);
    };
    window.addEventListener('click', fn);
    return () => {
      window.removeEventListener('click', fn);
    }
  }, []);

  return (
    <div className={styles.wheel}>
      <div className={`${styles.spinner} ${activeCard !== null ? styles.pause : ''}`}>
        {
          (new Array(36)).fill(0).map((_, i) => (
            <div
              key={i}
              className={`${styles.item} ${activeCard === i ? styles.active : ''}`}
              onClick={(evt) => {
                evt.preventDefault();
                evt.stopPropagation();
                setActiveCard(i);
              }}
            >
              <Card isReversed={activeCard === i} front={`${i} Front`} back={`${i} Back`} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Wheel;