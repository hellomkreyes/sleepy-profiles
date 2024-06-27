import styles from './Card.module.css';

const Card = ({ front, back }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.face}>{ front }</div>
        <div className={`${styles.face} ${styles.back}`}>{ back }</div>
      </div>
    </div>
  )
}

export default Card;