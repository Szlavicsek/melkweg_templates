import React from 'react';
import styles from './lead.module.scss'
import { withRouter } from 'react-router-dom'
import pic from '../../images/pexels-photo-39811.jpeg'

const Lead = (props) => {
	console.log(props.location.pathname)
	// let bgc,
	// 	textColor;
	// switch(props.location.pathname) {
	// 	case "/works":
	// 		bgc = "#29222F";
	// 		textColor = "#fff";
	// 		break;
	// 	case "/agency":
	// 		bgc = "#6E00FF";
	// 		textColor = "#fff";
	// 		break;
	// 	case "/contact":
	// 		bgc = "#FFF";
	// 		textColor = "#000";
	// 		break;
	// 	case "/jobs":
	// 		bgc = "#ddd";
	// 		textColor = "#000";
	// 		break;
	// 	default:
	// 		bgc = "#FFF";
	// 		textColor = "#fff";
	// }

	return (
		<div className={styles.lead_wrapper}>
			<img className={styles.background_media} src={pic} alt=""/>
			{/*<div className={styles.background_media}> </div>*/}
			<div className={styles.lead_caption_container}>
				<div className={styles.lead_caption_inner}>
					<h1 className={styles.lead_title}>We're proud of our work</h1>
					<p className={styles.lead_description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, quia.</p>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Lead);
