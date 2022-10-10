import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images/index';
import { Link } from 'react-router-dom';
import config from '~/config/routes';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.col_2}>
                    <img className={styles.logo} src={Images.logo} alt="logo" />
                </div>
                <div className={styles.col_10}>
                    <div className={styles.options}>
                        <div className={styles.options_6}>
                            <ul>
                                <li>
                                    <Link style={{ color: '#f45d96' }} to={config.home}>
                                        home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={config.about}>about</Link>
                                </li>
                                <li>
                                    <Link to={config.services}>services</Link>
                                </li>
                                <li>
                                    <Link to={config.products}>shop</Link>
                                </li>
                                <li>
                                    <Link to={config.blog}>blog</Link>
                                </li>
                                <li>
                                    <Link to={config.contact}>contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.options_3}>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span>(05)</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span>(01)</span>
                                    <span className={styles.total_price}>$ 65.0</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
