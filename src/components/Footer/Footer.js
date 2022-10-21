import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config/routes';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.instagram}>
                    <div className={styles.instagram_container}>
                        <div className={styles.instagram_img}>
                            <img src={Images.ig1} alt="ig1" />
                            <div className={styles.instagram_hover}>
                                <FontAwesomeIcon className={styles.instagram_icon} icon={faInstagram} size="lg" />
                                <h6>Follow us @florist</h6>
                            </div>
                        </div>
                        <div className={styles.instagram_img}>
                            <img src={Images.ig2} alt="ig2" />
                            <div className={styles.instagram_hover}>
                                <FontAwesomeIcon className={styles.instagram_icon} icon={faInstagram} size="lg" />
                                <h6>Follow us @florist</h6>
                            </div>
                        </div>
                        <div className={styles.instagram_img}>
                            <img src={Images.ig3} alt="ig3" />
                            <div className={styles.instagram_hover}>
                                <FontAwesomeIcon className={styles.instagram_icon} icon={faInstagram} size="lg" />
                                <h6>Follow us @florist</h6>
                            </div>
                        </div>
                        <div className={styles.instagram_img}>
                            <img src={Images.ig4} alt="ig4" />
                            <div className={styles.instagram_hover}>
                                <FontAwesomeIcon className={styles.instagram_icon} icon={faInstagram} size="lg" />
                                <h6>Follow us @florist</h6>
                            </div>
                        </div>
                        <div className={styles.instagram_img}>
                            <img src={Images.ig5} alt="ig5" />
                            <div className={styles.instagram_hover}>
                                <FontAwesomeIcon className={styles.instagram_icon} icon={faInstagram} size="lg" />
                                <h6>Follow us @florist</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.slogan}>
                    <div className={styles.slogan_container}>
                        <Link to={config.home}>
                            <img src={Images.logo} alt="logo" />
                        </Link>
                        <span>
                            The floristry business has a significant market in the corporate and social event world, as
                            flowers
                        </span>
                        <div className={styles.slogan_icon}>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                    </div>
                </div>
                <div className={styles.menu_link}>
                    <div className={styles.menu_link_container}>
                        <div className={styles.menu_link_clo2}>
                            <div className={styles.menu_link_widget}>
                                <h2>Company</h2>
                                <ul>
                                    <li>About us</li>
                                    <li>Servcies </li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.menu_link_clo2}>
                            <div className={styles.menu_link_widget}>
                                <h2>Account</h2>
                                <ul>
                                    <li>My cart</li>
                                    <li>Wisslist</li>
                                    <li>Login/Register</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.menu_link_clo4}>
                            <div className={styles.menu_link_news}>
                                <h2>Newletter</h2>
                                <p>Subcribe to our newsletter to get more free tips. No Spam, Promise.</p>
                                <form action="">
                                    <input type="text" placeholder="Email" />
                                    <button>Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className={styles.menu_link_clo4}>
                            <div className={styles.menu_link_address}>
                                <h2>Get in touch</h2>
                                <ul>
                                    <li>69 North Cleveland Street, Memphis,USA</li>
                                    <li>(123) 8111 9210 - (012) 1111 6868</li>
                                    <li>Florisr@supportthem.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <div className={styles.copyright_container}>
                        <span>
                            Copyright by Tuan <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
