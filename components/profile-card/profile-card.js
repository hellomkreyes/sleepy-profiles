import styles from "./Profile.module.css";
import { cards } from "../../data/cards";

const ProfileCard = () => {
	// const cardFronts = cards.map((card) => card.cardFront);

	return (
		<div className={styles.scene}>
			<label className={styles.cardWrap}>
				<input type="checkbox" className={styles.flipcard} />
				<div className={styles.card}>
					<div className={`${styles.front} ${styles.cardFace}`}>
						<img
							src="https://images.unsplash.com/photo-1517374148673-a38e9dd4fe6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
							alt=""
							className={styles.cardPhoto}
						/>
					</div>
					<div className={`${styles.back} ${styles.cardFace}`}>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
				</div>
			</label>
		</div>
	);
};
export default ProfileCard;
