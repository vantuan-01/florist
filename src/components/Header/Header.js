import { Link, NavLink } from 'react-router-dom';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { selectTotalPrice, selectTotalQty } from '~/reducers/Cart';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images/index';
import SearchResult from '../SearchResult';
import clsx from 'clsx';
import config from '~/config/routes';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';

function Header() {
    const [openPanel, setOpenPanel] = useState(false);
    const totalItems = useSelector(selectTotalQty);
    const totalPrices = useSelector(selectTotalPrice);
    const [logged, setLogged] = useState(true);
    const [resize, setReSize] = useState('');

    const listenToScroll = () => {
        const limitHeight = 150;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log('🚀 ~ file: Header.js ~ line 23 ~ listenToScroll ~ winScroll', winScroll);
        if (winScroll > limitHeight) {
            setReSize('header_onScroll');
        } else if (winScroll <= limitHeight) {
            setReSize('');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => {
            window.removeEventListener('scroll', listenToScroll);
        };
    });

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
        <>
            <div
                className={clsx(styles.header, {
                    [styles.header_onScroll]: resize,
                })}
            >
                <div className={styles.container}>
                    <div className={styles.col_2}>
                        <Link to={config.home}>
                            <img className={styles.logo} src={Images.logo} alt="logo" />
                        </Link>
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
                                                        clsx(styles.navItem, {
                                                            [styles.active]: nav.isActive,
                                                        })
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
                                            <button onClick={() => setOpenPanel(!openPanel)}>
                                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                            </button>
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
                                                    $ {totalPrices && totalPrices !== 0 ? totalPrices : 0}
                                                    .00
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

            <SearchResult openPanel={openPanel}>
                <h1>search result</h1>
                <button onClick={() => setOpenPanel(!openPanel)}>close</button>
            </SearchResult>
        </>
    );
}

export default Header;
