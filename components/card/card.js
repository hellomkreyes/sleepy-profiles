import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.face}>Page 1</div>
        <div className={`${styles.face} ${styles.back}`}>Page 2</div>
      </div>
    </div>
  )
}

export default Card;