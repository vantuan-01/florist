import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { selectTotalPrice, selectTotalQty } from '~/reducers/Cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images/index';
import { Link } from 'react-router-dom';
import config from '~/config/routes';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Header() {
    const totalItems = useSelector(selectTotalQty);
    const totalPrices = useSelector(selectTotalPrice);
    const [logged, setLogged] = useState(false);

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
                                    <Link to={config.product}>shop</Link>
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
                            {logged ? (
                                <ul>
                                    <li>
                                        <Link>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <span>(05)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.cart}>
                                            <FontAwesomeIcon icon={faCartShopping} />
                                            <span>({totalItems && totalItems !== 0 ? totalItems : 0})</span>
                                            <span className={styles.total_price}>
                                                $ {totalPrices && totalPrices !== 0 ? totalPrices : 0}.00
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            ) : (
                                <Link className={styles.loginBtn} to={config.signIn}>
                                    log in
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
