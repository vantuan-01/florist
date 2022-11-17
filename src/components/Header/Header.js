import { Link, NavLink } from 'react-router-dom';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { selectTotalPrice, selectTotalQty } from '~/reducers/Cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images/index';
import clsx from 'clsx';
import config from '~/config/routes';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Header() {
    const totalItems = useSelector(selectTotalQty);
    const totalPrices = useSelector(selectTotalPrice);
    const [logged, setLogged] = useState(true);

    const list = [
        {
            name: 'home',
            config: config.home,
        },
        {
            name: 'about',
            config: config.about,
        },
        {
            name: 'services',
            config: config.services,
        },
        {
            name: 'shop',
            config: config.product,
        },
        {
            name: 'blog',
            config: config.blog,
        },
        {
            name: 'contact',
            config: config.contact,
        },
    ];

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
                                {list &&
                                    list.map((item, index) => (
                                        <li key={index}>
                                            <NavLink
                                                end
                                                className={(nav) =>
                                                    clsx(styles.navItem, { [styles.active]: nav.isActive })
                                                }
                                                to={item.config}
                                            >
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
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
                                            <span>(00)</span>
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
