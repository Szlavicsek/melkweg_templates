import React from 'react';
import styles from './worksample.module.scss'
import img from '../../images/pexels-photo-39811.jpeg'

const Worksample = () => {
    return (
        <div className={styles.worksample}>
            <div className={styles.description_section}>
                <div className={styles.description}>
                    <h2 className={styles.description_title}>Redesigning one of Hungary's biggest electricity and gas supplier website with its nearly 2 million user base was an outstanding project.</h2>
                    <p className={styles.description_paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi consequatur cum ea eius esse nesciunt odio placeat quis repudiandae! Amet dicta eius esse laborum odit possimus, qui ullam voluptas. Alias illo laboriosam modi quis recusandae. Aperiam aspernatur ipsum maxime minima minus molestias mollitia omnis provident voluptatibus voluptatum! Debitis exercitationem hic magni modi nisi provident quae sint. Ab cumque, doloribus inventore odit quam quasi quod tempora voluptatibus. Ad, alias aspernatur dicta eligendi et hic id illo itaque iure minus molestias nam nesciunt nihil nisi non odit placeat praesentium quasi qui quia quo rem repellat repellendus rerum sed totam unde ut.</p>
                    <a className={styles.project_website_link} href="#">Visit website</a>
                </div>
                <div className={styles.project_data}>
                    <div className={styles.data_snippet}>
                        <h2 className={styles.snippet_title}>Client</h2>
                        <p className={styles.snippet_description}>Elmű-Émász part of Innogy</p>
                    </div>
                    <div className={styles.data_snippet}>
                        <h2 className={styles.snippet_title}>Industry</h2>
                        <p className={styles.snippet_description}>Energy Sector</p>
                    </div>
                    <div className={styles.data_snippet}>
                        <h2 className={styles.snippet_title}>Client</h2>
                        <p className={styles.snippet_description}>Elmű-Émász part of Innogy</p>
                    </div>
                    <div className={styles.data_snippet}>
                        <h2 className={styles.snippet_title}>Year</h2>
                        <p className={styles.snippet_description}>2017 - 2018</p>
                    </div>
                </div>
            </div>
            <div className={styles.stakholder}>
                <div className={styles.beforeafter}>
                    <div className={styles.beforeafter_inner}>
                        <div className={styles.beforeafter_media}></div>
                    </div>
                </div>

                <div className={styles.purple_descriptions_wrapper}>
                    <div className={styles.purple_descriptions}>
                        <div className={`${styles.purple_description} row d-flex justify-content-between`}>
                            <div className={`${styles.purple_description_inner}`}>
                                <h3 className={styles.stakholder_title}>Stakholder interviews</h3>
                                <p className={styles.stakholder_description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eaque eum expedita fugit ipsum labore libero nam officia praesentium quaerat quasi qui quidem quod, recusandae repellendus sapiente suscipit. A accusamus asperiores cum eum exercitationem libero nam officia omnis voluptate voluptatibus!</p>
                            </div>
                            <div className={styles.stakholder_img_container}>
                                <img className={styles.stakholder_img} src={img} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.purple_descriptions}>
                        <div className={`${styles.purple_description} row d-flex justify-content-between`}>
                            <div className={styles.stakholder_img_container}>
                                <img className={styles.stakholder_img} src={img} alt=""/>
                            </div>
                            <div className={`${styles.purple_description_inner}`}>
                                <h3 className={styles.stakholder_title}>Stakholder interviews</h3>
                                <p className={styles.stakholder_description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eaque eum expedita fugit ipsum labore libero nam officia praesentium quaerat quasi qui quidem quod, recusandae repellendus sapiente suscipit. A accusamus asperiores cum eum exercitationem libero nam officia omnis voluptate voluptatibus!</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Worksample;
