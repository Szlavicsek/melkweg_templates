import React from 'react';
import styles from "./showcase.module.scss";
import Profile from "../../profile_card/profile";
import SmallFooter from '../small/smallfooter'
import workPic from "../../../images/pexels-photo-39811.jpeg";
import Button from "../../../Components/button/button";

const Showcase = () => {
	return (
		<div className={styles.showcase_wrapper}>
			<div className={styles.latest_works_wrapper}>
				<h2 className={styles.latest_works_header}>Latest works</h2>
				<div className={styles.works_grid_wrapper}>

					<a className={styles.works_grid_item} href="#">
						<div className={styles.work_image_wrapper}>
							<img className={styles.work_image} src={workPic} alt="hello"/>
						</div>
						<div className={styles.work_image_text}>
							<h2 className={styles.work_image_title}>NKFIH Redesign</h2>
							<p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
						</div>
					</a>

					<a className={styles.works_grid_item} href="#">
						<div className={styles.work_image_wrapper}>
							<img className={styles.work_image} src={workPic} alt="hello"/>
						</div>
						<div className={styles.work_image_text}>
							<h2 className={styles.work_image_title}>NKFIH Redesign</h2>
							<p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
						</div>
					</a>

					<a className={styles.works_grid_item} href="#">
						<div className={styles.work_image_wrapper}>
							<img className={styles.work_image} src={workPic} alt="hello"/>
						</div>
						<div className={styles.work_image_text}>
							<h2 className={styles.work_image_title}>NKFIH Redesign</h2>
							<p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
						</div>
					</a>
				</div>
			</div>
			<Button customClass={styles.explore_button} text="Explore our work"/>
			<SmallFooter />
		</div>
	);
};

export default Showcase;


