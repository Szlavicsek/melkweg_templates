import React from 'react';
import styles from './agency.module.scss'
import Button from '../../Components/button/button'
import leadImage from "../../images/pexels-photo-39811.jpeg";
import leadVideo from "../../images/v1.mp4";
import Profile from '../../Components/profile_card/profile'
import BigFooter from '../../Components/footers/big/bigfooter'

const Agency = () => {
    return (
        <div className={styles.agency}>
            <div className={styles.inner}>
                <div className={styles.media_wrapper}>
                    <div className={styles.media_left}>
                        <img className={styles.imgLeft} src={leadImage} alt="imgleft"/>
                    </div>
                    <div className={styles.media_right}>
                        <video className={styles.videoRight} src={leadVideo} autoPlay loop></video>
                    </div>
                </div>
                <h1 className={styles.services}>Services</h1>
                <div className={`${styles.services_list_wrapper} row`}>

                    <div className={`${styles.services_box} col-lg-3 col-md-6 d-flex justify-content-center`}>
                        <div className={`${styles.services_box_inner} `}>
                            <h5 className={`${styles.service_title}`}>Strategy</h5>
                            <ul className={`${styles.service_list}`}>
                                <li className={styles.service_list_element}>wqd qwd qwdw</li>
                                <li className={styles.service_list_element}>dqwdw qwd</li>
                                <li className={styles.service_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.service_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.services_box} col-lg-3 col-md-6 d-flex justify-content-center`}>
                        <div className={`${styles.services_box_inner} `}>
                            <h5 className={`${styles.service_title}`}>Strategy</h5>
                            <ul className={`${styles.service_list}`}>
                                <li className={styles.service_list_element}>wqd qwd qwdw</li>
                                <li className={styles.service_list_element}>dqwdw qwd</li>
                                <li className={styles.service_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.service_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.services_box} col-lg-3 col-md-6 d-flex justify-content-center`}>
                        <div className={`${styles.services_box_inner} `}>
                            <h5 className={`${styles.service_title}`}>Strategy</h5>
                            <ul className={`${styles.service_list}`}>
                                <li className={styles.service_list_element}>wqd qwd qwdw</li>
                                <li className={styles.service_list_element}>dqwdw qwd</li>
                                <li className={styles.service_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.service_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.services_box} col-lg-3 col-md-6 d-flex justify-content-center`}>
                        <div className={`${styles.services_box_inner} `}>
                            <h5 className={`${styles.service_title}`}>Strategy</h5>
                            <ul className={`${styles.service_list}`}>
                                <li className={styles.service_list_element}>wqd qwd qwdw</li>
                                <li className={styles.service_list_element}>dqwdw qwd</li>
                                <li className={styles.service_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.service_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <Button customClass={styles.button} text="Get in touch" />
            </div>

            <div className={styles.team}>
                <div className={styles.whymelkweg}>
                    <h6 className={styles.why_header}>Why Melkweg?</h6>
                </div>
                <div className={styles.inner}>
                    <h1 className={styles.team_header}>Our team</h1>

                    <div className={`${styles.team_leaders_wrapper} row justify-content-around`}>
                        <Profile size="big" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="big" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="big" name="Firstname Lastname" job="Details" pic={leadImage}/>
                    </div>

                    <div className={`${styles.team_members_wrapper} row justify-content-around`}>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                        <Profile size="small" name="Firstname Lastname" job="Details" pic={leadImage}/>
                    </div>

                </div>
            </div>
            <div className={styles.story_wrapper}>
                <h2 className={styles.story_header}>Story</h2>
                <p className={styles.story_paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid autem blanditiis commodi ex exercitationem expedita fuga fugiat laboriosam maiores minima molestias, nobis non obcaecati optio praesentium sed sunt tenetur vero voluptate. Consequatur fugiat labore minus repudiandae rerum sit vero? Ab, eius, voluptate? Dolorum facere hic impedit qui totam veniam.</p>
                <p className={styles.story_paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum, cumque harum illum in incidunt, modi necessitatibus non obcaecati perferendis similique tempora voluptatibus voluptatum. Assumenda aut blanditiis fugit harum ipsam iste nihil odit possimus repellendus.</p>
            </div>
            <BigFooter />
        </div>
    );
};

export default Agency;