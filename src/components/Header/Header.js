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
import { useRef } from 'react';
import { useSelector } from 'react-redux';

function Header() {
    const [logged, setLogged] = useState(true);
    const [openPanel, setOpenPanel] = useState(false);
    const ref = useRef();
    const [resize, setReSize] = useState('');
    const totalItems = useSelector(selectTotalQty);
    const totalPrices = useSelector(selectTotalPrice);

    useEffect(() => {
        const listenToScroll = () => {
            const limitHeight = 150;
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            if (winScroll > limitHeight) {
                setReSize('header_onScroll');
            } else if (winScroll <= limitHeight) {
                setReSize('');
            }
        };
        window.addEventListener('scroll', listenToScroll);
        return () => {
            window.removeEventListener('scroll', listenToScroll);
        };
    });

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpenPanel(false);
                document.body.style.overflow = '';
            }
        };
        document.addEventListener('mouseup', handleClickOutside);
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [ref]);

    const handleClose = (value) => {
        setOpenPanel(value);
        document.body.style.overflow = '';
    };
    const handleOpen = () => {
        setOpenPanel(!openPanel);
        document.body.style.overflow = 'hidden';
    };

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
                                            <button onClick={handleOpen}>
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

            <SearchResult handleClose={handleClose} openPanel={openPanel} ref={ref} />
        </>
    );
}

export default Header;
