import * as httpRequest from '~/utils/httpRequest';

import { IsOpenPanel, selectLogged, selectOpenPanel } from '~/reducers/Login';
import { Link, NavLink } from 'react-router-dom';
import { faCircleXmark, faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import { searchName, selectSearch } from '~/reducers/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import AuthBtn from '../AuthBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import Portal from '~/components/Portal';
import clsx from 'clsx';
import config from '~/config/routes';
import { forwardRef } from 'react';
import navlink from '~/config/navlink';
import { selectScale } from '~/reducers/Devices';
import styles from './SearchResult.module.scss';
import { useRef } from 'react';

function SearchResult({}, ref) {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const searched = useSelector(selectSearch);
    const scale = useSelector(selectScale);
    const isLogged = useSelector(selectLogged);
    const openPanel = useSelector(selectOpenPanel);
    const [searchValue, setSearchValue] = useState('');
    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        httpRequest.get('/product/products').then((res) => {
            setListProduct(res);
        });
    }, []);

    useEffect(() => {
        if (openPanel && !scale) {
            inputRef.current.focus();
        } else if (!openPanel && !scale) {
            setSearchValue('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openPanel]);

    useEffect(() => {
        if (searchValue) {
            setLoading(true);
        }
        const handler = setTimeout(() => {
            dispatch(searchName({ listProduct, searchValue }));
            setLoading(false);
        }, 2000);

        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    const handleClear = () => {
        inputRef.current.focus();
        setSearchValue('');
        dispatch(searchName({ listProduct, searchValue: '' }));
    };
    const handleChange = (e) => {
        // const value = e.target.value.replace(/[^a-z]/gi, '').toLowerCase();
        const value = e.target.value.toLowerCase();
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    return (
        <Portal id="search-result-id">
            <div className={clsx(styles.modal, { [styles.modal_slide]: !openPanel })}></div>
            {scale === 'web' ? (
                <div ref={ref} className={clsx(styles.searchResult, { [styles.searchResult_slide]: !openPanel })}>
                    <div className={styles.wrapper_search}>
                        <div className={styles.searchResult_inner}>
                            <button
                                className={styles.searchResult_delbtn}
                                onClick={() => {
                                    dispatch(IsOpenPanel(false));
                                    handleClear();
                                }}
                            >
                                <FontAwesomeIcon icon={faXmark} size="2x" />
                            </button>
                            <h1>Search</h1>
                            <div className={styles.searchResult_container}>
                                <div className={styles.searchResult_input}>
                                    <input
                                        ref={inputRef}
                                        value={searchValue}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Find name or category ...."
                                    />
                                    {searchValue && !loading && (
                                        <button className={styles.clear_btn} onClick={handleClear}>
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </button>
                                    )}
                                    {loading && <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />}
                                    <button className={styles.searchResult_searchIcon}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </button>
                                </div>
                                <div className={styles.searchResult_results}>
                                    {listProduct.length !== 0 && searched.length !== 0 ? (
                                        <ul>
                                            {searched.map((item, index) => (
                                                <li key={index} className={styles.searchResult_item}>
                                                    <Link
                                                        to={`${config.product}/${item.id}`}
                                                        onClick={() => {
                                                            document.body.style.overflow = '';
                                                            dispatch(IsOpenPanel(false));
                                                        }}
                                                    >
                                                        <img src={item.imageUrl} alt="searchResult_item" />
                                                        <div className={styles.searchResult_item_content}>
                                                            <p>{item.category}</p>
                                                            <span>{item.name}</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className={styles.nothing}>Nothing found</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div ref={ref} className={clsx(styles.wrapper, { [styles.wrapper_slide]: !openPanel })}>
                    <div className={styles.container}>
                        <div className={clsx(styles.header, { [styles.header_slide]: !openPanel })}>
                            <button className={styles.header_backbtn} onClick={() => dispatch(IsOpenPanel(false))}>
                                <FontAwesomeIcon icon={faXmark} size="3x" />
                            </button>
                            <div className={styles.header_logo}>
                                <img src={Images.logo} alt="logo" />
                            </div>
                        </div>
                        <div className={styles.body}>
                            <ul className={clsx({ [styles.ul_slide]: openPanel })}>
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
                                                onClick={() => dispatch(IsOpenPanel(false))}
                                            >
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                {isLogged && isLogged.length !== 0 && scale === 'mobile' && (
                                    <li style={{ marginTop: '1rem' }}>
                                        <AuthBtn signout />
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </Portal>
    );
}

export default forwardRef(SearchResult);
