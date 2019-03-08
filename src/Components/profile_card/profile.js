import React from 'react';
import styles from './profile.module.scss'

const Profile = (props) => {
	return (
		<div className={`${styles.profile_item} ${props.size === "small" ? styles.profile_small : ""}`}>
			<div className={styles.profile_item_inner}>
				<img className={styles.profile_image} src={props.pic} alt="hello"/>
				<div className={styles.profile_text}>
					<h5 className={styles.profile_name}>{props.name}</h5>
					<p className={styles.profile_title}>{props.job}</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
