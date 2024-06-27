import Card from "../card/card";
import styles from './Wheel.module.css';

const Wheel = () => {
  return (
    <div className={styles.wheel}>
      <div className={styles.spinner}>
        {
          (new Array(36)).fill(0).map((_, i) => (
            <div key={i} className={styles.item}>
              <Card />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Wheel;