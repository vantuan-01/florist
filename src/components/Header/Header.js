import { IsOpenPanel, loginStatus, selectLogged } from '~/reducers/Login';
import { Link, NavLink } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { selectScale, setScale } from '~/reducers/Devices';
import { selectTotalPrice, selectTotalQty, setOrderList, setTotalPrice, setTotalQty } from '~/reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import AuthBtn from '../AuthBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images/index';
import SearchResult from '../SearchResult';
import clsx from 'clsx';
import config from '~/config/routes';
import { db } from '~/utils/firebase';
import navlink from '~/config/navlink';
import styles from './Header.module.scss';
import { useRef } from 'react';

function Header() {
    const auth = getAuth();
    const ref = useRef();
    const dispatch = useDispatch();
    const totalItems = useSelector(selectTotalQty);
    const totalPrices = useSelector(selectTotalPrice);
    const [isShrink, setIsShrink] = useState(false);
    const isLogged = useSelector(selectLogged);
    const scale = useSelector(selectScale);
    useEffect(() => {
        const listenToScroll = () => {
            setIsShrink((isShrink) => {
                if (!isShrink && (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)) {
                    return true;
                }

                if (isShrink && document.body.scrollTop < 20 && document.documentElement.scrollTop < 20) {
                    return false;
                }

                return isShrink;
            });
        };
        window.addEventListener('scroll', listenToScroll);
        return () => {
            document.removeEventListener('scroll', listenToScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                dispatch(IsOpenPanel(false));
                document.body.style.overflow = '';
            }
        };
        document.addEventListener('mouseup', handleClickOutside);
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [ref]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (currentUser) => {
            try {
                if (currentUser) {
                    const useruid = auth.currentUser ? auth.currentUser.uid : null;
                    const useremail = auth.currentUser ? auth.currentUser.email : null;
                    dispatch(loginStatus({ useruid, useremail }));
                    getCartHistory();
                } else {
                    dispatch(loginStatus());

                    // console.log('no user');
                }
            } catch (error) {
                // console.log(error.message);
            }
        });
        return () => {
            unSub();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleResize = () => {
        const width = window.innerWidth;
        if (width <= 1300 && width > 800) {
            dispatch(setScale('tablet'));
            dispatch(IsOpenPanel(false));
        } else if (width <= 800) {
            dispatch(setScale('mobile'));
            dispatch(IsOpenPanel(false));
        } else {
            dispatch(setScale('web'));
            dispatch(IsOpenPanel(false));
        }
    };

    const getCartHistory = async () => {
        const docRef = doc(db, `${auth.currentUser.email}`, `cartDetails`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const obList = docSnap.data();
            // console.log('Document data:', obList);
            dispatch(setOrderList(obList.orderList));
            localStorage.setItem('orderList', JSON.stringify(obList.orderList));
            dispatch(setTotalPrice(obList.totalPrice));
            localStorage.setItem('totalPrice', JSON.stringify(obList.totalPrice));
            dispatch(setTotalQty(obList.totalQty));
            localStorage.setItem('totalQty', JSON.stringify(obList.totalQty));
        } else {
            // console.log('No such document!');
        }
    };

    // const handleClose = (value) => {
    //     // setOpenPanel(value);
    //     dispatch(IsOpenPanel(value));

    //     document.body.style.overflow = '';
    // };
    const handleOpen = () => {
        dispatch(IsOpenPanel(true));
        document.body.style.overflow = 'hidden';
    };

    // if (!totalItems && !totalPrices && isLogged.length !== 0) {
    //     document.body.style.overflow = 'hidden';
    //     return <Loading />;
    // } else document.body.style.overflow = '';

    return (
        <>
            <div
                className={clsx(styles.header, {
                    [styles.header_onScroll]: isShrink,
                })}
            >
                <div className={styles.container}>
                    <div className={styles.col_2}>
                        {scale === 'tablet' || scale === 'mobile' ? (
                            <button onClick={handleOpen}>
                                <FontAwesomeIcon icon={faBars} size="2x" />
                            </button>
                        ) : null}
                        <Link to={config.home}>
                            <img className={styles.logo} src={Images.logo} alt="logo" />
                        </Link>
                    </div>
                    <div className={styles.col_10}>
                        <div className={styles.options}>
                            {scale === 'web' ? (
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
                                <ul>
                                    {scale === 'web' ? (
                                        <li>
                                            <button className={styles.search_btn} onClick={handleOpen}>
                                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                            </button>
                                        </li>
                                    ) : null}

                                    <li>
                                        <NavLink to={config.cart}>
                                            <div className={styles.total_qty}>
                                                <FontAwesomeIcon icon={faCartShopping} />
                                                <span>{totalItems && totalItems !== 0 ? totalItems : 0}</span>
                                            </div>
                                            <span className={styles.total_price}>
                                                $ {totalPrices && totalPrices !== 0 ? totalPrices : 0}
                                                .00
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        {isLogged && isLogged.length !== 0 ? (
                                            <>{scale !== 'mobile' ? <AuthBtn signout /> : null}</>
                                        ) : (
                                            <Link className={styles.loginBtn} to={config.signIn}>
                                                log in
                                            </Link>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SearchResult ref={ref} />
        </>
    );
}

export default Header;
