import { Link, NavLink } from 'react-router-dom';
import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { selectTotalPrice, selectTotalQty } from '~/reducers/Cart';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images/index';
import SearchResult from '../SearchResult';
import Sidebar from '../Sidebar';
import clsx from 'clsx';
import config from '~/config/routes';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import navlink from '~/config/navlink';
import styles from './Header.module.scss';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

function Header() {
    const ref = useRef();
    const [logged, setLogged] = useState(true);
    const [openPanel, setOpenPanel] = useState(false);
    const [resize, setReSize] = useState('');
    const totalItems = useSelector(selectTotalQty);
    const totalPrices = useSelector(selectTotalPrice);
    const [scale, setScale] = useState(false);

    useEffect(() => {
        const listenToScroll = () => {
            const limitHeight = 120;
            const winScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (winScroll > limitHeight) {
                setReSize('header_onScroll');
            } else if (winScroll <= limitHeight) {
                setReSize('');
            }
        };
        window.addEventListener('scroll', listenToScroll);
    }, []);

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

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 1229) {
                setScale(true);
            } else if (width > 1229) {
                setScale(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClose = (value) => {
        setOpenPanel(value);
        document.body.style.overflow = '';
    };
    const handleOpen = () => {
        setOpenPanel(!openPanel);
        document.body.style.overflow = 'hidden';
    };

    return (
        <>
            <div
                className={clsx(styles.header, {
                    [styles.header_onScroll]: resize,
                })}
            >
                <div className={styles.container}>
                    <div className={styles.col_2}>
                        {scale && (
                            <button>
                                <FontAwesomeIcon icon={faBars} size="2x" />
                            </button>
                        )}
                        <Link to={config.home}>
                            <img className={styles.logo} src={Images.logo} alt="logo" />
                        </Link>
                    </div>
                    <div className={styles.col_10}>
                        <div className={styles.options}>
                            {!scale ? (
                                <div className={styles.options_6}>
                                    <ul>
                                        {navlink &&
                                            navlink.map((item, index) => (
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
                            ) : null}
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
            <Sidebar />
        </>
    );
}

export default Header;
