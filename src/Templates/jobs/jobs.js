import React from 'react';
import styles from './jobs.module.scss'
import office from "../../images/og-services.jpg";
import { Link } from 'react-router-dom'
import Showcase from '../../Components/footers/with_showcase/showcase'

const Jobs = () => {
    return (
        <div className={styles.jobs}>
            <div className={styles.carousel}>
                <div className={styles.media_wrapper_inner}>
                    <div className={styles.carousel}></div>
                </div>
            </div>
            <div className={styles.inner}>
                <div className={`${styles.contact_list_wrapper} row`}>

                    <div className={`${styles.contact_box} col-md-4 col-sm-6 col-xs-7 d-flex justify-content-center`}>
                        <div className={styles.contact_box_inner}>
                            <h5 className={styles.contact_title}>Visit us</h5>
                            <ul className={styles.contact_list}>
                                <li className={styles.contact_list_element}>wqd qwd qwdw</li>
                                <li className={styles.contact_list_element}>dqwdw qwd</li>
                                <li className={styles.contact_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.contact_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.contact_box} col-md-4 col-sm-6 col-xs-7 d-flex justify-content-center`}>
                        <div className={styles.contact_box_inner}>
                            <h5 className={styles.contact_title}>Visit us</h5>
                            <ul className={styles.contact_list}>
                                <li className={styles.contact_list_element}>wqd qwd qwdw</li>
                                <li className={styles.contact_list_element}>dqwdw qwd</li>
                                <li className={styles.contact_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.contact_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.contact_box} col-md-4 col-sm-6 col-xs-7 d-flex justify-content-center`}>
                        <div className={styles.contact_box_inner}>
                            <h5 className={styles.contact_title}>Visit us</h5>
                            <ul className={styles.contact_list}>
                                <li className={styles.contact_list_element}>wqd qwd qwdw</li>
                                <li className={styles.contact_list_element}>dqwdw qwd</li>
                                <li className={styles.contact_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.contact_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.contact_box} col-md-4 col-sm-6 col-xs-7 d-flex justify-content-center`}>
                        <div className={styles.contact_box_inner}>
                            <h5 className={styles.contact_title}>Visit us</h5>
                            <ul className={styles.contact_list}>
                                <li className={styles.contact_list_element}>wqd qwd qwdw</li>
                                <li className={styles.contact_list_element}>dqwdw qwd</li>
                                <li className={styles.contact_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.contact_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.contact_box} col-md-4 col-sm-6 col-xs-7 d-flex justify-content-center`}>
                        <div className={styles.contact_box_inner}>
                            <h5 className={styles.contact_title}>Visit us</h5>
                            <ul className={styles.contact_list}>
                                <li className={styles.contact_list_element}>wqd qwd qwdw</li>
                                <li className={styles.contact_list_element}>dqwdw qwd</li>
                                <li className={styles.contact_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.contact_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.contact_box} col-md-4 col-sm-6 col-xs-7 d-flex justify-content-center`}>
                        <div className={styles.contact_box_inner}>
                            <h5 className={styles.contact_title}>Visit us</h5>
                            <ul className={styles.contact_list}>
                                <li className={styles.contact_list_element}>wqd qwd qwdw</li>
                                <li className={styles.contact_list_element}>dqwdw qwd</li>
                                <li className={styles.contact_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.contact_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.open_positions}>
                <div className={styles.inner}>
                    <h1 className={styles.positions_header}>Open Positions</h1>
                    <div className={styles.positions_container}>
                        <Link className={styles.job_link} to="#">
                            <span className={styles.job_name}>Backend Developer</span>
                            <div className={styles.job_arrow}></div>
                        </Link>
                        <Link className={styles.job_link} to="#">
                            <span className={styles.job_name}>Senior UX Designer</span>
                            <div className={styles.job_arrow}></div>
                        </Link>
                        <p className={styles.job_p}>Not on the list? Sorry, we currently dont have any Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda autem dolore esse fugiat quae reprehenderit sequi. Possimus, similique!</p>
                    </div>

                </div>
            </div>
            <Showcase />
        </div>
    );
};

export default Jobs;