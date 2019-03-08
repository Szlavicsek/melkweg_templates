import React from 'react';
import styles from './contact.module.scss'
import Button from '../../Components/button/button'
import helloimage from "../../images/helloimage.png";
import office from "../../images/og-services.jpg";
import workPic from "../../images/pexels-photo-39811.jpeg";
import Profile from '../../Components/profile_card/profile'
import SmallFooter from '../../Components/footers/small/smallfooter'

const Contact = () => {
    return (
        <div className={styles.contact}>
            {/*<div className={styles.page_top}></div>*/}
            <div className={styles.inner}>
                <div className={styles.media_wrapper}>
                    <div className={styles.media_wrapper_inner}>
                        <img className={styles.media_image} src={office} alt=""/>
                    </div>
                </div>
                <div className={`${styles.contact_list_wrapper} row`}>

                    <div className={`${styles.contact_box} col-sm-4 col-xs-7 d-flex justify-content-center`}>
                        <div className={`${styles.contact_box_inner} `}>
                            <h5 className={styles.contact_title}>Visit us</h5>
                            <ul className={styles.contact_list}>
                                <li className={styles.contact_list_element}>wqd qwd qwdw</li>
                                <li className={styles.contact_list_element}>dqwdw qwd</li>
                                <li className={styles.contact_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.contact_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.contact_box} col-sm-4 col-xs-7 d-flex justify-content-center`}>
                        <div className={`${styles.contact_box_inner} `}>
                            <h5 className={styles.contact_title}>Visit us</h5>
                            <ul className={styles.contact_list}>
                                <li className={styles.contact_list_element}>wqd qwd qwdw</li>
                                <li className={styles.contact_list_element}>dqwdw qwd</li>
                                <li className={styles.contact_list_element}>qwd wdqwd qwdqw</li>
                                <li className={styles.contact_list_element}>qwd qwd qww dqw</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.contact_box} col-sm-4 col-xs-7 d-flex justify-content-center`}>
                        <div className={`${styles.contact_box_inner} `}>
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

            <div className={styles.form}>
                <div className={styles.inner}>
                    <h1 className={styles.form_header}>Say hi</h1>
                    <div className={`${styles.form_container} d-flex justify-content-center`}>
                        <form action="" id={styles.form}>
                            <label htmlFor={styles.name}>Your name</label>
                            <input id={styles.name} type="text"/>
                            <label htmlFor={styles.email}>Your email</label>
                            <input id={styles.email} type="text"/>
                            <label htmlFor={styles.message}>Your message</label>
                            <input id={styles.message} type="textarea"/>
                            <label htmlFor={styles.acceptPolicy}>I accept Melkweg's Privacy Policy</label>
                            <input id={styles.acceptPolicy} type="checkbox"/>
                            <Button customClass={styles.submitButton} text="Send Message" type="submit"/>
                            <Button customClass={styles.cancelButton} text="Cancel"/>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.hello_image_container}>
                <img className={styles.hello_image} src={helloimage} alt="helloimage"/>
            </div>
            <div className={styles.latest_works_wrapper}>
                <h2 className={styles.latest_works_header}>Latest works</h2>
                <div className={`${styles.works_wrapper} d-flex justify-content-around`}>
                    <Profile pic={workPic} name="Profession" job="Rebranding Hungary's largest HR Portal"/>
                    <Profile pic={workPic} name="Profession" job="Rebranding Hungary's largest HR Portal"/>
                    <Profile pic={workPic} name="Profession" job="Rebranding Hungary's largest HR Portal"/>
                </div>
            </div>
            <SmallFooter />
        </div>
    );
};

export default Contact;