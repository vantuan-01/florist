import * as httpRequest from '~/utils/httpRequest';

import { faCircleXmark, faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import { searchName, selectSearch } from '~/reducers/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Portal from '~/components/Portal';
import clsx from 'clsx';
import config from '~/config/routes';
import { forwardRef } from 'react';
import styles from './SearchResult.module.scss';
import { useRef } from 'react';

function SearchResult({ openPanel, handleClose }, ref) {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const searched = useSelector(selectSearch);
    const [searchValue, setSearchValue] = useState('');
    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (openPanel) {
            inputRef.current.focus();
        }
    }, [openPanel]);

    useEffect(() => {
        httpRequest.get('/product/products').then((res) => {
            setListProduct(res.data);
        });
    });

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
        setListProduct([]);
        dispatch(searchName({ listProduct, searchValue: '' }));
    };
    const handleChange = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    return (
        <Portal>
            <div ref={ref} className={clsx(styles.searchResult, { [styles.searchResult_slide]: !openPanel })}>
                <div className={styles.wrapper}>
                    <div className={styles.searchResult_inner}>
                        <button
                            className={styles.searchResult_delbtn}
                            onClick={() => {
                                handleClose(!openPanel);
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
                                    placeholder="Name..."
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
                                                    onClick={() => (document.body.style.overflow = '')}
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
        </Portal>
    );
}

export default forwardRef(SearchResult);
