import React from 'react';
import styles from './works.module.scss'
import leadImage from "../../images/pexels-photo-39811.jpeg"
import logo1 from "../../images/cisco.PNG"
import logo2 from "../../images/ddb.PNG"
import logo3 from "../../images/inmarsat.PNG"
import logo4 from "../../images/grey.PNG"
import logo5 from "../../images/isobar.PNG"
import Button from '../../Components/button/button'
import Spinner from '../../Components/spinner/spinner'
import BigFooter from "../../Components/footers/big/bigfooter";

const Works = () => {
    return (
        <div className={styles.works}>
            <div className={styles.inner}>
                <div className={styles.lead}>
                    <div className={styles.lead_inner}>
                        <img className={styles.lead_image} src={leadImage} alt="hello" />
                    </div>
                    <a href="#" className={styles.lead_info}>
                        <h2 className={styles.lead_image_title}>NKFIH Redesign</h2>
                        <p className={styles.lead_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                    </a>
                </div>
                <div className={styles.works_grid_wrapper}>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                            <Spinner />
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                            <Spinner />
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                            <Spinner />
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                            <Spinner />
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                    <a className={styles.works_grid_item} href="#">
                        <div className={styles.work_image_wrapper}>
                            <img className={styles.work_image} src={leadImage} alt="hello"/>
                            <Spinner />
                        </div>
                        <div className={styles.work_image_text}>
                            <h2 className={styles.work_image_title}>NKFIH Redesign</h2>
                            <p className={styles.work_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                        </div>
                    </a>

                </div>
                <div className={styles.works_bottom}>
                    <Button customClass={styles.load_more} text="Load more" />
                    <p className={styles.disclaimer}>
                        All of this contents are published for self-promotional, business-to-business purposes for the exclusive use of our clients. Melkweg explicitly forbids the downloading or re-purposing of any text, audio, visual, programming or design data without prior written consent.
                    </p>
                </div>
            </div>
            <div className={styles.brands_wrapper}>
                <h2 className={styles.brands_text}>Brands & clients</h2>
                <div className={styles.logo_grid_wrapper}>
                    <div className={styles.brand_logo_container}>
                        <a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
                    </div>
                    <div className={styles.brand_logo_container}>
                        <a className={styles.brand_logo} href="#"><img src={logo2} alt=""/></a>
                    </div>
                    <div className={styles.brand_logo_container}>
                        <a className={styles.brand_logo} href="#"><img src={logo3} alt=""/></a>
                    </div>
                    <div className={styles.brand_logo_container}>
                        <a className={styles.brand_logo} href="#"><img src={logo4} alt=""/></a>
                    </div>
                    <div className={styles.brand_logo_container}>
                        <a className={styles.brand_logo} href="#"><img src={logo5} alt=""/></a>
                    </div>
                    <div className={styles.brand_logo_container}>
                        <a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
                    </div>
                    <div className={styles.brand_logo_container}>
                        <a className={styles.brand_logo} href="#"><img src={logo2} alt=""/></a>
                    </div>
                    <div className={styles.brand_logo_container}>
                        <a className={styles.brand_logo} href="#"><img src={logo3} alt=""/></a>
                    </div>
                    <div className={styles.brand_logo_container}>
                        <a className={styles.brand_logo} href="#"><img src={logo4} alt=""/></a>
                    </div>
                    <div className={styles.brand_logo_container}>
                        <a className={styles.brand_logo} href="#"><img src={logo5} alt=""/></a>
                    </div>
                </div>
            </div>
            <BigFooter/>
        </div>
    );
};

export default Works;