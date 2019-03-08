import React, { Component } from 'react';
import styles from './header.module.scss';
import { Link, withRouter } from "react-router-dom";
import wave from '../../images/wave.png'

class Header extends Component {

    showMenu(e) {
        this.refs.mobileMenu.style.transform = "translateX(0%)"
    }

    closeMenu(e) {
        this.refs.mobileMenu.style.transform = "translateX(100%)"
    }

    render() {
    	let textColor;
        switch(this.props.location.pathname) {
        	case "/works":
        		textColor = "#fff";
        		break;
        	case "/agency":
        		textColor = "#fff";
        		break;
        	case "/contact":
        		textColor = "#000";
        		break;
        	case "/jobs":
        		textColor = "#000";
        		break;
        	default:
        		textColor = "#fff";
        }
        return (
            <header className={styles.header}>
                <div className={styles.inner}>
                    <Link className={styles.logo} onClick={()=>this.restoreScreenHeight()} to="/">
                        <svg version="1.1" id={styles.M} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
							 viewBox="0 0 48.189 48.189" enableBackground="new 0 0 48.189 48.189">
                            <polygon fill={textColor} points="33.006,3.761 24.096,24.921 15.185,3.761 0.664,3.761 0.664,44.43 12.545,44.43 12.545,24.921
                        13.204,24.921 17.825,37.486 24.096,37.486 30.367,37.486 34.985,24.921 35.646,24.921 35.646,44.43 47.526,44.43 47.526,3.761 "/>
                        </svg>
                    </Link>
                    <div className={styles.links_container}>
                        <Link className={styles.link_wrapper} onClick={this.props.clicked} style={{color: textColor}} to="/works"><span>Works</span></Link>
                        <Link className={styles.link_wrapper} onClick={this.props.clicked} style={{color: textColor}} to="/agency"><span>Agency</span></Link>
                        <Link className={styles.link_wrapper} onClick={this.props.clicked} style={{color: textColor}} to="/contact"><span>Contact</span></Link>
                        <Link className={styles.link_wrapper} onClick={this.props.clicked} style={{color: textColor}} to="/jobs"><span>Jobs</span></Link>
                    </div>
                    <div onClick={()=>this.showMenu()} className={styles.hamburger}></div>
                </div>
                <div ref='mobileMenu' className={styles.mobile_menu}>
                    <div className={styles.mobile_menu_inner}>
                        <button onClick={()=>this.closeMenu()} id={styles.close_button}></button>
                        <ul className={styles.links_container_mobile}>
                            <li onClick={this.props.clicked} className={styles.link_wrapper}><Link className={styles.link} style={{color: textColor}} to="/works">Works</Link></li>
                            <li onClick={this.props.clicked} className={styles.link_wrapper}><Link className={styles.link} style={{color: textColor}} to="/agency">Agency</Link></li>
                            <li onClick={this.props.clicked} className={styles.link_wrapper}><Link className={styles.link} style={{color: textColor}} to="/contact">Contact</Link></li>
                            <li onClick={this.props.clicked} className={styles.link_wrapper}><Link className={styles.link} style={{color: textColor}} to="/jobs">Jobs</Link></li>
                            <li onClick={this.props.clicked} className={styles.link_wrapper}><img className={styles.wave} src={wave} alt=""/></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
};

export default withRouter(Header);
