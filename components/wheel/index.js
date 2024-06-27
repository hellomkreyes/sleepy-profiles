'use client';

import { useState } from 'react';
import Card from "../card/card";
import styles from './Wheel.module.css';

const Wheel = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={styles.wheel}>
      <div className={styles.spinner}>
        {
          (new Array(36)).fill(0).map((_, i) => (
            <div key={i} className={styles.item} onClick={() => setActiveCard(i)}>
              <Card isReversed={activeCard === i} front={`${i} Front`} back={`${i} Back`} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Wheel;